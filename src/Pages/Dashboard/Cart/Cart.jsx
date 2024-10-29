import { FaTrash } from "react-icons/fa";
import UseCart from "../../../UseCart/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../UseAxiosSucure/UseAxiosSecure";

const Cart = () => {
  const [cart] = UseCart();
  const axiosSecure = UseAxiosSecure();

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log("Item deleted successfully:", res.data);
        });
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">Total Items</span>
          <span className="text-2xl font-bold">{cart.length}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">Total Price</span>
          <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors">
          Pay
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        {/* Header Labels */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 font-semibold">
          <span>Item</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Action</span>
        </div>

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center p-4 border-b border-gray-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img || "https://via.placeholder.com/50"}
                alt={item.name || "Product"}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-lg font-medium">
                {item.name || "Unnamed Item"}
              </span>
            </div>

            <span className="text-lg font-medium text-gray-700">
              {item.quantity || 0}
            </span>

            <span className="text-lg font-medium text-gray-700">
              ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
            </span>

            {/* Delete Button */}
            <button
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => handleDelete(item._id)}
            >
              <FaTrash size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
