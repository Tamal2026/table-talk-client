import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useAdmin } from "../components/UseAdmin/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";

 const AdminRoute = (children) => {
  const [user, loading] = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
