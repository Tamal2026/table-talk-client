import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  FaShoppingCart,
  FaRegEdit,
  FaHistory,
  FaBookmark,
  FaHome,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

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
  const totalPrice = userData.reduce((total, order) => total + order.price, 0);

  return (
    <div className="max-w-screen-lg mx-auto mb-8 px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-start animate-fadeIn">
        <div className="text-xl mt-4">
          <span className="text-gray-600">Hi, Welcome</span>
          <h1 className="font-bold text-2xl">
            {user?.displayName ? user.displayName : "Back"}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
          <div className="order-box bg-gradient-to-r from-green-400 to-green-500 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="font-bold text-xl">Total Orders</p>
            <p className="font-bold text-4xl mt-2 animate-bounce">
              {userData.length}
            </p>
          </div>
          <div className="order-box bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <p className="font-bold text-xl">Total Spent</p>
            <p className="font-bold text-4xl mt-2 animate-bounce">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
          {/* My Cart Button */}
          <Link to={'/dashboard/cart'}>
            <button className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-orange-600">
              <FaShoppingCart className="text-2xl" />
              My Cart
            </button>
          </Link>

          {/* Add Review Button */}
          <Link to={'/dashboard/addReview'}>
            <button className="flex items-center gap-2 px-4 py-3 bg-purple-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-purple-600">
              <FaRegEdit className="text-2xl" />
              Add Review
            </button>
          </Link>

          {/* Payment History Button */}
          <Link to={'/dashboard/paymentHistory'}>
            <button className="flex items-center gap-2 px-4 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-teal-600 whitespace-nowrap">
              <FaHistory className="text-2xl" />
              Payment History
            </button>
          </Link>

          {/* My Booking Button */}
          <Link to={'/dashboard/myBooking'}>
            <button className="flex items-center gap-2 px-4 py-3 bg-red-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-red-600 whitespace-nowrap">
              <FaBookmark className="text-2xl" />
              My Booking
            </button>
          </Link>
        </div>
      </div>

      {/* Back to Home Button at the bottom */}
      <div className="w-full flex justify-center mt-6">
        <Link to={'/'}>
          <button className="flex items-center gap-2 px-6 py-3 mb-5 bg-gray-500 text-white font-bold text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <FaHome className="text-2xl" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
