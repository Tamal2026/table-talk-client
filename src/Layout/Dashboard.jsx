import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaCog,
  FaShoppingCart,
  FaHistory,
  FaStar,
  FaBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-full bg-blue-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out w-64 shadow-lg z-40`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          <button
            onClick={toggleDrawer}
            className="text-2xl hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <ul className="space-y-4 p-4">
          <li>
            <Link
              to="/dashboard/home"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaHome className="text-lg" /> Users Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cart"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaShoppingCart className="text-lg" /> My Cart
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/payment-history"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaHistory className="text-lg" /> Payment History
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-review"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaStar className="text-lg" /> Add Review
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/my-booking"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaBook className="text-lg" /> My Booking
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaCog className="text-lg" /> Settings
            </Link>
          </li>

          <hr className="border-gray-500 my-2" />
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded transition-colors duration-300"
            >
              <FaCog className="text-lg" /> Home
            </Link>
          </li>
        </ul>
      </div>

      {!isOpen && (
        <button
          onClick={toggleDrawer}
          className="p-2 fixed top-4 left-4 z-50 bg-gray-100 rounded-full shadow-lg flex flex-col gap-1 items-center justify-center transition-transform duration-500 ease-in-out"
        >
          <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className={`flex-1 p-6 transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl font-bold">Dashboard Content</h1>
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
