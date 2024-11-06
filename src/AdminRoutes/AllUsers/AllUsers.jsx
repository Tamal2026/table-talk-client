import { useQuery } from "@tanstack/react-query";
import { FaHome, FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../../UseAxiosPublic/UseAxiosPublic";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  // Fetch users data with react-query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      try {
        const res = await axiosSecure.get("/users", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        return res.data;
      } catch (err) {
        console.error(
          "Error fetching users:",
          err.response?.status,
          err.response?.data
        );
        throw err;
      }
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}`)
      .then((res) => {
        console.log("Admin update response:", res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${userId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
      <div className="flex gap-10 mb-4">
      <h2 className="text-2xl font-semibold mb-4">
        All Users <span className="text-gray-600 dark:text-gray-400">({users.length})</span>
      </h2>
      <Link to={"/dashboard/adminHome"}><button className="btn text-white bg-green-500 flex items-center"><FaHome></FaHome><h1>Back to Dashboard</h1></button></Link>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-left">
            <th className="p-4 border-b dark:border-gray-600">Name</th>
            <th className="p-4 border-b dark:border-gray-600">Email</th>
            <th className="p-4 border-b dark:border-gray-600">Role</th>
            <th className="p-4 border-b dark:border-gray-600 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b dark:border-gray-600 py-2">
              <td className="p-2">
                <div className="flex flex-col items-start">
                  <span className="font-medium">{user.name}</span>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col items-start">
                  <span>{user.email}</span>
                </div>
              </td>
              <td className="p-2">
                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="flex flex-col items-start"
                  >
                    <span className="text-md p-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white">
                      {user.role || <GrUserAdmin />}
                    </span>
                  </button>
                )}
              </td>
              <td className="p-2 text-center">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
