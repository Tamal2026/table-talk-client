/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure.jsx";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // Piechart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Hi {user?.displayName ? user.displayName : "Admin"}, Welcome Back!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card for Total Users */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl mt-2">{stats.users || 0}</p>
        </div>

        {/* Card for Total Orders */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-3xl mt-2">{stats.orders || 0}</p>
        </div>

        {/* Card for Total Revenue */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl mt-2">
            ${stats.revenue?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
