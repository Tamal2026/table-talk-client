/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../UseAxiosSucure/UseAxiosSecure";
import UseCart from "../../UseCart/UseCart";

const MenuItem = ({ item }) => {
  const { img, price, name, short_desc, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = UseCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        img,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `<span style="color: #3085d6;">${name}</span> added to your cart!`,
            imageUrl: img,
            imageAlt: "Product image",
            imageWidth: 200,
            imageHeight: 200,
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              image: "swal-image-round",
              popup: "swal-popup-animated",
              title: "swal-title-decorated",
            },
            background: "#f9f9f9",
            timerProgressBar: true,
          });

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login First to Order",
        text: "You are not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-b border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="w-full sm:w-20 md:w-32 h-32 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-2">{short_desc}</p>
        <h2 className="text-lg font-bold text-orange-500 mb-4">
          Price: ${price}
        </h2>

        <button className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300 w-full md:w-auto text-sm sm:text-base">
          Details
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 md:mt-0 flex items-center justify-center bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 group relative"
      >
        <FaShoppingCart className="text-lg text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-white" />
        <span className="absolute inset-0 w-full h-full bg-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"></span>
        <span className="absolute inset-0 w-full h-full rounded-full border-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
        <span className="absolute inset-0 w-full h-full rounded-full bg-green-500 opacity-30 group-hover:animate-pulse transition-opacity duration-500 ease-out"></span>
      </button>
    </div>
  );
};

export default MenuItem;
