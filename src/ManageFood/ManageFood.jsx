import SectionTitle from "../components/SectionTitle/SectionTitle";
import Cover from "../Pages/Shared/Cover/Cover";
import { FaEdit, FaHome, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageFood = () => {
  const axiosSecure = useAxiosSecure();

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted from menu.`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <Cover
        img={"https://i.ibb.co/gMysBv6/manage-food.jpg"}
        titleName={"Manage Food Items"}
        short_desc={
          "View, update, and manage all food items in the restaurant menu, ensuring accurate information and seamless control over available offerings"
        }
      />
      <Link to={"/dashboard/adminHome"}>
        <button className="flex items-center text-white bg-blue-600 btn mx-auto my-3">
          <FaHome></FaHome>
          <h1>Back to dashboard</h1>
        </button>
      </Link>
      <div className="mt-4">
        <SectionTitle
          subHeading={"ADD FOOD"}
          heading={"DELIGHT YOUR MENU"}
        ></SectionTitle>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold text-green-600">
              <th>
                <th>#</th>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="text-xl font-medium font-serif">
                <td>{index + 1} </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/updateFood/${item._id}`}>
                    <button className="bg-blue-500 text-white text-center px-3 text-lg py-2 rounded-lg">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className=" text-red-500 text-center text-2xl"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
