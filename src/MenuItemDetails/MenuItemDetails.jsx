import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import Swal from "sweetalert2";
import UseCart from "../UseCart/UseCart";
import { AuthContext } from "../Provider/AuthProvider"; 

const MenuItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 
  const [, refetch] = UseCart();

  useEffect(() => {
    axiosSecure
      .get(`/menu/${id}`)
      .then((res) => setItem(res.data))
      .catch((error) => console.error(error));
  }, [id, axiosSecure]);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        img: item.img,
        price: item.price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `<span style="color: #3085d6;">${item.name}</span> added to your cart!`,
            imageUrl: item.img,
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

  if (!item) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center my-32">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-4xl">
        {/* Image Section */}
        <figure className="w-full lg:w-1/2">
          <img
            src={item.img}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{item.name}</h2>
          <p className="text-gray-700 mt-4">{item.short_desc}</p>
          <p className="text-xl font-semibold text-orange-500 mt-2">
            Price: ${item.price}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {item.long_desc}
          </p>

          <div className="card-actions justify-end mt-6">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
