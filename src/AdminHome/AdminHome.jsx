/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure.jsx";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  FaUsers,
  FaProductHunt,
  FaClipboardList,
  FaUtensils,
  FaHome,
} from "react-icons/fa"; // Icons for buttons
import { Link } from "react-router-dom";

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

  const pieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 animate-fadeIn">
        Hi {user?.displayName ? user.displayName : "Admin"}, Welcome Back!
      </h1>
      <Link to={'/'}><button className="flex items-center gap-2 border mb-5 btn bg-orange-600 text-white font-bold"><FaHome className="text-xl "></FaHome>Back to home</button></Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-1/2">
        {/* Statistics Cards */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl mt-2">{stats.users || 0}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-3xl mt-2">{stats.orders || 0}</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl mt-2">
            ${stats.revenue?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>

      {/* Action Buttons */}

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around">
        {/* Bar Chart */}
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="quantity" fill="#8884d8" label={{ position: "top" }}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Link to={'/dashboard/allUsers'}>
   
          <button className="flex items-center justify-center gap-2 px-24 py-3 bg-fuchsia-600 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-blue-600">
            <FaUsers className="text-2xl" />
           All Users
          </button>
        </Link>
        <Link to={"/dashboard/addFood"}>
          <button className="flex items-center justify-center gap-2 px-24 py-3 bg-cyan-600 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-green-600">
            <FaProductHunt className="text-2xl" />
            Add Food
          </button>
        </Link>
        <Link to={"/dashboard/manageBooking"}>
          <button className="flex items-center justify-center gap-2 px-20 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-orange-600">
            <FaClipboardList className="text-2xl" />
            Manage Booking
          </button>
        </Link>
        <Link to={"/dashboard/manageFood"}>
          <button className="flex items-center justify-center gap-2 px-20 py-3 bg-emerald-600 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-red-600">
            <FaUtensils className="text-2xl" />
            Manage Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
