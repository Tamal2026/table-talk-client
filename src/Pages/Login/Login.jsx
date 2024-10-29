import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin"


const Login = () => {
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from || "/";

  useEffect(() => {
    loadCaptchaEnginge(5); 
  }, []);

  const handleValidateCaptcha = () => {
    if (validateCaptcha(captchaInput)) {
      setIsCaptchaValid(true);
    } else {
      alert("Invalid CAPTCHA. Please try again.");
      setIsCaptchaValid(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isCaptchaValid) {
      signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace: true });
        })
        .catch(error => {
          console.error("Login error:", error);
          alert("Login failed. Please check your credentials.");
        });
    } else {
      alert("Please validate the CAPTCHA before logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-red-200 to-blue-300">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <div
          className="md:w-1/2 w-full hidden md:flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://i.ibb.co/7KS2FV5/fast-food-removebg-preview.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
        </div>

        <div className="md:w-1/2 w-full p-12 md:p-16 animate-fade-in">
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* CAPTCHA container */}
            <LoadCanvasTemplate />
            <div className="flex items-center space-x-4">
              <input
                type="text"
                id="captcha"
                placeholder="Type the above text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
              <button
                type="button"
                onClick={handleValidateCaptcha}
                className="py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Validate
              </button>
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-white rounded-md font-semibold transform hover:scale-105 transition duration-300 ease-in-out ${
                isCaptchaValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isCaptchaValid}
            >
              Log In
            </button>
          </form>

          {/* Social login section */}
          <div className="my-6 text-center">
            <p className="text-sm text-gray-600 mb-2 font-bold">--- Or login with ---</p>
            <SocialLogin />
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
