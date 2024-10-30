import { useState } from "react";

const AddFood = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "Breakfast",
        price: "",
        short_desc: "",
        description: "",
        imageUrl: "",
        ingredients: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit form data to your server here
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/RNBFjQt/pngtree-restaurant-blur-images-dark-background-image-15612197.jpg')" }}
        >
            <form onSubmit={handleSubmit} className="max-w-md w-full p-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Add New Food Item</h2>

                <label className="block mb-2 text-sm font-medium text-gray-200">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter food name"
                />

                <label className="block mb-2 text-sm font-medium text-gray-200">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                    <option>Drinks</option>
                </select>

                <label className="block mb-2 text-sm font-medium text-gray-200">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter price"
                />

                <label className="block mb-2 text-sm font-medium text-gray-200">Short Description</label>
                <input
                    type="text"
                    name="short_desc"
                    value={formData.short_desc}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter a short description"
                />

                <label className="block mb-2 text-sm font-medium text-gray-200">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter a detailed description"
                />

                <label className="block mb-2 text-sm font-medium text-gray-200">Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter image URL"
                />

                <label className="block mb-2 text-sm font-medium text-gray-200">Ingredients</label>
                <input
                    type="text"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    placeholder="Enter ingredients"
                />

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600"
                >
                    Add Food Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;
