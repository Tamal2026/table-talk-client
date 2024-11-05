import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
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
          setErrorMessage(''); 
          navigate(from, { replace: true });
        })
        .catch(error => {
          console.error("Login error:", error);
          setErrorMessage("Login failed. Please check your email and password."); 
        });
    } else {
      alert("Please validate the CAPTCHA before logging in.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/M2rWr8R/login.jpg')",
      }}
    >
   
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

      <div className="relative flex flex-col w-full max-w-lg p-12 space-y-6 animate-fade-in rounded-lg shadow-lg bg-transparent backdrop-blur-sm">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          {/* CAPTCHA container */}
          <LoadCanvasTemplate />
          <div className="flex items-center space-x-4">
            <input
              type="text"
              id="captcha"
              placeholder="Type the above text"
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
            <button
              type="button"
              onClick={handleValidateCaptcha}
              className="py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transform transition duration-300 ease-in-out"
            >
              Validate
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <button
            type="submit"
            className={`w-full py-3 text-white rounded-md font-semibold transform transition duration-300 ease-in-out ${
              isCaptchaValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isCaptchaValid}
          >
            Log In
          </button>
        </form>

        {/* Social login section */}
        <div className="my-6 text-center">
          <p className="text-sm text-gray-200 mb-2 font-bold">--- Or login with ---</p>
          <SocialLogin />
        </div>

        <p className="mt-8 text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <Link to="/signUp" className="text-blue-300 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
