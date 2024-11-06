import Swal from "sweetalert2";
import UseAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ManageBooking = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookTable");
      return res.data;
    },
  });
  const handleDelete = (booking) => {
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
        axiosSecure.delete(`/bookTable/${booking._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${booking.name} is deleted from Bookings`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-12">
      <h1 className="text-3xl font-bold mb-4">Manage Bookings</h1>
      <Link to={"/dashboard/adminHome"}><button className="btn text-white bg-green-500 flex items-center"><FaHome></FaHome><h1>Back to Dashboard</h1></button></Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div
              key={index}
              className="p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                Booking for {booking.name}
              </h2>
              <p className="text-gray-600 font-medium">
                Email: {booking.email}
              </p>
              <p className="text-gray-600 font-medium">Date: {booking.date}</p>
              <p className="text-gray-600 font-medium">Time: {booking.time}</p>
              <p className="text-gray-600 font-medium">
                Guests: {booking.guests}
              </p>
              {booking.requests && (
                <p className="text-gray-600">Requests: {booking.requests}</p>
              )}
              <p className="text-gray-600 font-semibold">
                Status: <span className="text-blue-500">{booking.status}</span>
              </p>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleDelete(booking)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;
