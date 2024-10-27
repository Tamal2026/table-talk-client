import { useState } from 'react';

const SignUp = () => {
  const [image, setImage] = useState(null);

  // Handle image upload preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6 animate-fade-in">
          Register
        </h2>
        <form className="space-y-4 animate-fade-in">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
            {image && (
              <div className="mt-4 flex justify-center">
                <img src={image} alt="Preview" className="w-24 h-24 rounded-full shadow-lg" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-purple-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
