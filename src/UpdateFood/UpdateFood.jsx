import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Cover from "../Pages/Shared/Cover/Cover";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";

const UpdateFood = () => {
  const axiosPublic = UseAxiosPublic();
  const item = useLoaderData();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    short_desc: "",
    description: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        price: item.price || "",
        category: item.category || "",
        short_desc: item.short_desc || "",
        description: item.description || "",
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("price", formData.price);
      submissionData.append("category", formData.category);
      submissionData.append("short_desc", formData.short_desc);
      submissionData.append("description", formData.description);

      if (formData.img) {
        submissionData.append("img", formData.img);
      }

      const response = await axiosPublic.patch(
        `/menu/${item._id}`,
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Update successful:", response.data);
    } catch (error) {
      console.error(
        "Update failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <Cover
        img={"https://i.ibb.co/bvCgdKw/update.jpg"}
        titleName={"Update Food"}
      />
      <div className="mt-5">
        <SectionTitle subHeading={"Update Food From Here"} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg space-y-4 sm:max-w-lg md:max-w-2xl mt-8"
      >
        {/* Name Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transform transition-all duration-300 ease-in-out hover:bg-blue-50"
          />
        </div>

        {/* Price Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transform transition-all duration-300 ease-in-out hover:bg-blue-50"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transform transition-all duration-300 ease-in-out hover:bg-blue-50"
          >
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Short Description
          </label>
          <input
            type="text"
            name="short_desc"
            value={formData.short_desc}
            onChange={handleInputChange}
            required
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transform transition-all duration-300 ease-in-out hover:bg-blue-50"
          />
        </div>

        {/* Description */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transform transition-all duration-300 ease-in-out hover:bg-blue-50"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transform transition-all duration-300 ease-in-out"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
