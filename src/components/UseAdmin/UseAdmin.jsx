import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../UseAxiosSucure/UseAxiosSecure";

const UseAdmin = () => {
  const { user,loading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: isAdmin = false, isLoading } = useQuery({

    queryKey: [user?.email, "isAdmin"],
   enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user?.email) return false;
      try {
        const res = await axiosSecure.get(`/users/${user.email}`);

        return res.data?.admin;
      } catch (error) {
        console.error("Error fetching admin status:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          console.error("Unauthorized access");
        }
        return false;
      }
    },
  });

  // Additional logging for debugging purposes

  return [isAdmin, isLoading];
};

export default UseAdmin;
