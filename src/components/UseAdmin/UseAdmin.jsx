import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../UseAxiosSucure/UseAxiosSecure";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin = false, isLoading } = useQuery({
    enabled: !!user?.email,
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user?.email) return false;
      try {
        const res = await axiosSecure.get(`/users/${user.email}`);
        console.log("Admin status:", res.data.admin);
        return res.data?.admin;
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.error("Unauthorized access");
        }
        return false;
      }
    },
  });

  return [isAdmin, isLoading];
};
export default UseAdmin;
