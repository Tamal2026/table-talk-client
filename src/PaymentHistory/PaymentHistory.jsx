import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cover from "../Pages/Shared/Cover/Cover";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../UseAxiosSucure/UseAxiosSecure';
import { FaHome } from "react-icons/fa";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Cover
        img={"https://i.ibb.co.com/fpw4d1k/schematic-concept-online-shopping-store-260nw-1793985769.webp"}
        titleName={"Payment History"}
      />
      <div className="mt-5">
        <SectionTitle subHeading={"See your Payment History Here"} />
      </div>
      <div className="max-w-md mx-auto p-4 text-center">
       
        {payments.length > 0 ? (
          <div className="space-y-4 mt-4">
            {payments.map((payment, index) => (
              <div
                key={payment.id}
                className={`p-4 rounded-lg shadow-lg bg-gray-100 transform transition-all duration-700 ease-out
                  ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  ${loaded ? `delay-${index * 200}` : ""}
                `}
              >
                <p className="text-gray-700 font-sans font-semibold">
                  Date: {formatDate(payment.date)}
                </p>
                <p className="text-gray-700 font-serif font-medium mt-3">
                  Amount: ${payment.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 mt-5">Sorry, no payments yet.</p>
        )
        }
      </div>
      <Link to={"/dashboard/userHome"}>
          <button className="btn text-white bg-green-500 flex mx-auto items-center">
            <FaHome />
            <h1>Back to Dashboard</h1>
          </button>
        </Link> 
    </>
  );
};

export default PaymentHistory;
