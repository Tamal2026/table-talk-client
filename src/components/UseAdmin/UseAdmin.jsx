import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../UseAxiosSucure/UseAxiosSecure";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin = false } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user?.email) return false; 
      const res = await axiosSecure.get(`/users/${user.email}`);
      console.log("Admin status:", res.data.admin);
      return res.data?.admin;
    },
    enabled: !!user?.email,
  });

  return [isAdmin];
};
export default UseAdmin;