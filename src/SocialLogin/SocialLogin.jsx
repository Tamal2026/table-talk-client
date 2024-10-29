import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate('/')
      });
    });
  };
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center px-6 py-3 text-white bg-red-500 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <FaGoogle className="mr-2 text-xl" />
        <span className="text-lg font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
