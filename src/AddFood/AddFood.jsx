import { useState } from "react";
import useAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import useAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Breakfast",
    price: "",
    short_desc: "",
    description: "",
    imageUrl: "",
    mageFile: null,
  });

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.imageFile) {
      Swal.fire({
        icon: "error",
        title: "No image selected",
        text: "Please select an image before submitting.",
      });
      return;
    }

    try {
      const imgData = new FormData();
      imgData.append("image", formData.imageFile);

      const res = await axiosPublic.post(img_hosting_api, imgData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const menuItem = {
          name: formData.name,
          category: formData.category,
          price: parseFloat(formData.price),
          img: res.data.data.display_url,
          short_desc: formData.short_desc,
          description: formData.description,
        };

        const menuRes = await axiosSecure.post("/menu", menuItem);

        if (menuRes.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Food added to menu",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            name: "",
            category: "Breakfast",
            price: "",
            short_desc: "",
            description: "",
            imageUrl: "",
            imageFile: null,
          });
          setPreviewImage(null);
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/RNBFjQt/pngtree-restaurant-blur-images-dark-background-image-15612197.jpg')`,
      }}
    >
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Add New Food Item
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-200">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
          placeholder="Enter food name"
        />

        <label className="block mb-2 text-sm font-medium text-gray-200">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border  border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105 appearance-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
          }}
        >
          <option className="bg-black bg-opacity-40 text-white">
            Breakfast
          </option>
          <option className="bg-black bg-opacity-40 text-white">Lunch</option>
          <option className="bg-black bg-opacity-40 text-white">Dinner</option>
          <option className="bg-black bg-opacity-40 text-white">Dessert</option>
          <option className="bg-black bg-opacity-40 text-white">Drinks</option>
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-200">
          Price
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
          placeholder="Enter price"
        />

        <label className="block mb-2 text-sm font-medium text-gray-200">
          Short Description
        </label>
        <input
          type="text"
          name="short_desc"
          value={formData.short_desc}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
          placeholder="Enter a short description"
        />

        {/* Description Input */}
        <label className="block mb-2 text-sm font-medium text-gray-200">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
          placeholder="Enter a detailed description"
        />

        {/* Image Input */}
        <label className="block mb-2 text-sm font-medium text-gray-200">
          Image
        </label>
        <input
          type="file"
          name="imageFile"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full mb-4 text-white placeholder-gray-400"
        />

        {/* Image Preview */}
        {previewImage && (
          <div className="mt-4">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 mt-5 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600"
        >
          Add Food Item
        </button>
        <Link to={"/dashboard/adminHome"}>
          <button className="btn btn-ghost mx-auto mt-5 text-white bg-green-500 flex items-center">
            <FaHome></FaHome>
            <h1>Back to Dashboard</h1>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddFood;
