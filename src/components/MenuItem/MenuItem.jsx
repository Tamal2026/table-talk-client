/* eslint-disable react/prop-types */

import { FaShoppingCart } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const { img, price, name, short_desc } = item;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-b border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="w-full md:w-32 h-32 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-600 mb-2">{short_desc}</p>
        <h2 className="text-lg font-bold text-orange-500 mb-4">
          Price: ${price}
        </h2>

        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
          Details
        </button>
      </div>

      {/* Shopping Cart Button with Modern Animation */}
      <button className="relative flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-110 group">
        <FaShoppingCart
          className="text-lg relative z-10 transition-transform duration-300 group-hover:scale-125 group-hover:text-slate-100
                "
        />

        <span className="absolute inset-0 w-full h-full bg-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"></span>

        <span className="absolute inset-0 w-full h-full rounded-full border-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>

        <span className="absolute inset-0 w-full h-full rounded-full bg-green-500 opacity-30 group-hover:animate-pulse transition-opacity duration-500 ease-out"></span>
      </button>
    </div>
  );
};

export default MenuItem;
