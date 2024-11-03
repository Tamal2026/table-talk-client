import { useState, useEffect } from "react";
import Cover from "../Pages/Shared/Cover/Cover";
import SectionTitle from '../components/SectionTitle/SectionTitle'
const PaymentHistory = () => {
  // Static payment data
  const payments = [
    { id: 1, date: "2024-10-20", amount: 50, status: "Completed" },
    { id: 2, date: "2024-10-21", amount: 30, status: "Pending" },
    { id: 3, date: "2024-10-22", amount: 100, status: "Failed" },
  ];

  // Animation delay control
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay to simulate data loading and start animation
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <>
      <Cover
        img={
          "https://i.ibb.co.com/fpw4d1k/schematic-concept-online-shopping-store-260nw-1793985769.webp"
         }
      titleName={"Payment History"}></Cover>
      <div className="mt-5">
        <SectionTitle subHeading={"See your Payment History Here"}></SectionTitle>
      </div>
      <div className="max-w-md mx-auto p-4 text-center">
        
        <div className="space-y-4">
          {payments.map((payment, index) => (
            <div
              key={payment.id}
              className={`p-4 rounded-lg shadow-lg bg-gray-100 transform transition-all duration-700 ease-out
                            ${
                              loaded
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }
                            ${loaded ? `delay-${index * 200}` : ""} 
                        `}
            >
              <p className="text-gray-700">Date: {payment.date}</p>
              <p className="text-gray-700">Amount: ${payment.amount}</p>
              <p className="text-gray-700">Status: {payment.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
