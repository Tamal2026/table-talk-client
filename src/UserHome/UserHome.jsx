import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaShoppingCart, FaRegEdit, FaHistory, FaBookmark } from "react-icons/fa"; // Import icons

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: userData = [] } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userHome/?email=${user?.email}`);
      return res.data;
    },
  });

  // Calculate total price spent on all orders
  const totalPrice = userData.reduce((total, Order) => total + Order.price, 0);

  return (
    <div className="max-w-screen-md mx-auto mb-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start animate-fadeIn">
        <div className="text-xl mt-4">
          <span className="text-gray-600">Hi, Welcome</span>
          <h1 className="font-bold text-2xl">{user?.displayName ? user.displayName : "Back"}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
          <div className="order-box bg-gradient-to-r from-green-400 to-green-500 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="font-bold text-xl">Total Orders</p>
            <p className="font-bold text-4xl mt-2 animate-bounce">{userData.length}</p>
          </div>
          <div className="order-box bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="font-bold text-xl">Total Spent</p>
            <p className="font-bold text-4xl mt-2 animate-bounce">${totalPrice.toFixed(2)}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
          {/* My Cart Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-orange-600">
            <FaShoppingCart className="text-2xl" />
            My Cart
          </button>

          {/* Add Review Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-purple-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-purple-600">
            <FaRegEdit className="text-2xl" />
            Add Review
          </button>

          {/* Payment History Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-teal-600">
            <FaHistory className="text-2xl" />
            Payment History
          </button>

          {/* My Booking Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-red-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-red-600">
            <FaBookmark className="text-2xl" />
            My Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
