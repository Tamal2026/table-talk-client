import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import UseAxiosPublic from "../../UseAxiosPublic/UseAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = UseAxiosPublic();
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("User created:", loggedUser);

        updateProfile(loggedUser, {
          displayName: data.name,
        })
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/8zTLDkg/fast-food-dish-blue-155003-27517.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-transparent to-purple-900 opacity-70"></div>

      <div className="relative flex flex-col w-full max-w-lg p-6 sm:p-8 space-y-6 animate-fade-in rounded-lg shadow-lg bg-transparent backdrop-blur-sm">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-4 sm:mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-300 ease-in-out"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-md font-semibold transform transition duration-300 ease-in-out hover:bg-purple-600 hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 sm:my-6 text-center">
          <p className="text-sm text-gray-200 mb-2 font-bold">
            --- Or sign up with ---
          </p>
          <SocialLogin />
        </div>

        <p className="mt-4 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-300 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
