/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../components/UseAdmin/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <progress className="progress w-56"></progress>
        <p className="ml-4">Loading, please wait...</p>
      </div>
    );
  }

 

  if (user?.email && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
