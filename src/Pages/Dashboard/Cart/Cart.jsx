import { FaHome, FaTrash } from "react-icons/fa";
import UseCart from "../../../UseCart/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../UseAxiosSucure/UseAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = UseCart();
  const axiosSecure = UseAxiosSecure();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item._id]: item.quantity || 1 }), {})
  );

  // Calculate the total price based on the quantities state
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (quantities[item._id] || 1),
    0
  );

  // Handle quantity change for an item
  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  // Handle delete action for cart items
  const handleDelete = (id) => {
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
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.status === 200) {
              const updatedCart = cart.filter((item) => item._id !== id);
              setCart(updatedCart);
              setQuantities((prevQuantities) => {
                const { [id]: _, ...remainingQuantities } = prevQuantities;
                return remainingQuantities;
              });
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            } else {
              Swal.fire("Error", "Unable to delete the item. Try again.", "error");
            }
          })
          .catch((error) => {
            console.error("Delete failed:", error);
            Swal.fire("Error", "There was a problem deleting the item.", "error");
          });
      }
    });
  };

  return (
    <>
      <div className="cart-container p-6 bg-gray-100">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">Total Items</span>
            <span className="text-2xl font-bold">{cart.length}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">Total Price</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <Link to={"/dashboard/payment"}>
            <button
              disabled={!cart.length}
              className={`${
                !cart.length ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
              } pay-button text-white py-2 px-6 rounded-lg font-semibold transition-colors`}
            >
              Pay
            </button>
          </Link>
        </div>

        {/* Table layout with responsive design for smaller screens */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-700 font-semibold text-sm md:text-base">
                <th className="p-2 md:p-4">Item</th>
                <th className="p-2 md:p-4">Quantity</th>
                <th className="p-2 md:p-4">Price</th>
                <th className="p-2 md:p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item._id}
                  className="cart-item border-b border-gray-200 text-sm md:text-base"
                >
                  <td className="p-2 md:p-4 flex items-center gap-2 md:gap-4">
                    <img
                      src={item.img || "https://via.placeholder.com/50"}
                      alt={item.name || "Product"}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <span className="font-medium">
                      {item.name || "Unnamed Item"}
                    </span>
                  </td>
                  <td className="p-2 md:p-4 font-medium text-gray-700">
                    <div className="quantity-buttons flex items-center justify-between gap-2 md:gap-4">
                      <button 
                        onClick={() =>
                          handleQuantityChange(
                            item._id,
                            quantities[item._id] > 1 ? quantities[item._id] - 1 : 1
                          )
                        }
                        className="rounded-xl bg-red-500 btn-sm text-center font-bold text-white text-xl mr-2"
                      >
                        -
                      </button>
                      {quantities[item._id] || 1}
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, quantities[item._id] + 1)
                        }
                        className=" rounded-xl bg-blue-500 btn-sm text-center font-bold text-white text-xl ml-2 "
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 md:p-4 font-medium text-gray-700">
                    ${((item.price || 0) * (quantities[item._id] || 1)).toFixed(2)}
                  </td>

                  <td className="p-2 md:p-4">
                    <button
                      className="delete-btn text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link to={"/"}>
        <button className="btn flex items-center mx-auto bg-blue-500 my-4 text-white font-medium">
          <FaHome className="mr-2" />
          <h1>Back to Home</h1>
        </button>
      </Link>
    </>
  );
};

export default Cart;
