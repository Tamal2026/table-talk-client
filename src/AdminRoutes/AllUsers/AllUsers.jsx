import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../../UseAxiosPublic/UseAxiosPublic";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  
  // Fetch users data with react-query
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Handle user deletion
  const handleDelete = (userId) => {
    axiosSecure
      .delete(`/users/${userId}`)
      .then(() => {
        // Optionally, you could refetch users after deletion
        console.log("User deleted successfully");
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        All Users <span className="text-gray-600">({users.length})</span>
      </h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Email</th>
            <th className="p-4 border-b">Role</th>
            <th className="p-4 border-b text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b py-2">
              <td className="p-2">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Name</span>
                  <span>{user.name}</span>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col items-start">
                  <span>{user.email}</span>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col items-start">
                  <span>{user.role || "User"}</span>
                </div>
              </td>
              <td className="p-2 text-center">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700"
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
