import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [userloading, setUserLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/bookTable/${user?.email}`).then((res) => {
        setBooking(res.data);
        setUserLoading(false);
      });
    }
  }, [axiosSecure, user?.email]);

  const handleDelete = (item) => {
    // Show confirmation before deleting
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the deletion
        axiosPublic
          .delete(`/bookTable/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Show success alert
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });

              // Update the bookings state to remove the deleted booking
              setBooking((prevBookings) =>
                prevBookings.filter(
                  (bookingItem) => bookingItem._id !== item._id
                )
              );
            } else {
              console.error("No booking was deleted.");
            }
          })
          .catch((err) => {
            console.error("Error deleting booking:", err);
          });
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      <h1 className="text-2xl font-semibold mb-4">My Bookings</h1>
      <Link to={"/dashboard/userHome"}>
        <button className="btn text-white bg-green-500 flex items-center">
          <FaHome></FaHome>
          <h1>Back to Dashboard</h1>
        </button>
      </Link>
      {userloading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {booking.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booking.map((bookingItem, index) => (
            <div
              key={index}
              className="card w-full max-w-sm bg-base-100 shadow-lg transition-transform transform ease-in-out duration-300 hover:scale-105"
            >
              <div className="card-body">
                <h2 className="card-title bg-blue-600 w-3/4 py-2 rounded-md text-white pl-5">
                  Booking for {bookingItem.guests} Guests
                </h2>
                <p className="text-gray-600">
                  Booking Date: {bookingItem.date}
                </p>
                <p className="text-gray-600">
                  Booking Time: {bookingItem.time}
                </p>
                <p className="text-gray-500">
                  Reservation ID: {bookingItem._id || "N/A"}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(bookingItem)}
                    className="btn bg-red-600 text-white mt-4 font-bold"
                  >
                    Delete Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No Bookings Found</p>
      )}
    </div>
  );
};

export default MyBooking;
