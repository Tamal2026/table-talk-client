import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

  
  axiosSecure.interceptors.response.use(function(response){
    return response
  },async (error)=>{
    const status = error.response.status;
    if(status === 401 || status === 403){
      await logOut()
      navigate('/login');
    }
    return Promise.reject(error)
  })

  return axiosSecure;
};

export default UseAxiosSecure;
