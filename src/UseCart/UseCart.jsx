import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseCart = () => {
   const {user} = useContext(AuthContext)
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart,refetch];
};

export default UseCart;
