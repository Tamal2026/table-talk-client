import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log("User created:", loggedUser);

        // Update the user profile with display name and photo URL
        updateProfile(loggedUser, {
          displayName: data.name,
          photoURL: image || "default_image_url_placeholder"
        })
          .then(() => {
            console.log("User profile updated");
          })
          .catch(error => {
            console.error("Error updating profile:", error);
          });
      })
      .catch(error => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6 animate-fade-in">
          Register
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 animate-fade-in">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleImageUpload(e);
                register("profileImage").onChange(e);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            />
            {image && (
              <div className="mt-4 flex justify-center">
                <img src={image} alt="Preview" className="w-24 h-24 rounded-full shadow-lg" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-purple-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
