import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/bookTable/${user?.email}`).then((res) => {
        setBooking(res.data);
      });
    }
  }, [axiosSecure, user?.email]);
  return (
    <div>
      <h1>This is my booking </h1>

      {booking.length > 0 ? (
        <ul>
          {booking.map((booking, index) => (
            <li key={index}>
              <p>Booked Date: {booking.date}</p>
              <p>Total Person : {booking.guests}</p>
              <p></p>
              <p></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Bookings Found</p>
      )}
    </div>
  );
};

export default MyBooking;
