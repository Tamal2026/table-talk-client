import { useContext, useState } from "react";
import UseAxiosPublic from "../../UseAxiosPublic/UseAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BookTable = () => {
  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);

  const initialReservation = {
    name: user?.displayName || "",
    email: user?.email || "",
    date: "",
    time: "12:00 PM",
    guests: "0",
    requests: "", 
  };
  const [reservation, setReservation] = useState(initialReservation);
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not logged in");
      return;
    }

    setLoading(true); 
    const bookTableInfo = {
      name: user.displayName,
      email: user.email,
      date: reservation.date,
      time: reservation.time,
      guests: reservation.guests,
      requests: reservation.requests,
    };

    axiosPublic.post("/bookTable", bookTableInfo)
      .then((res) => {
        setLoading(false);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${user.displayName}, your reservation is confirmed on ${reservation.date} at ${reservation.time}.`,
            showConfirmButton: false,
            timer: 4000,
          });
          console.log(res.data)
          setReservation(initialReservation); 
        }
      })
      .catch((error) => {
        setLoading(false); 
        console.error("Error booking table:", error);
      });
  };

  return (
    <div className="reservation-form p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user?.displayName || ""}
            readOnly
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email || ""}
            readOnly
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={reservation.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} // Only allow future dates
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={reservation.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          >
            {generateTimeOptions()}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="guests">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={reservation.guests}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          >
            <option value={0} disabled>
              Select guests
            </option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Special Requests Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="requests">
            Special Requests
          </label>
          <textarea
            id="requests"
            name="requests"
            value={reservation.requests}
            onChange={handleChange}
            placeholder="Any special requests or any kind of restrictions?"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold rounded-md focus:outline-none`}
        >
          {loading ? "Reserving..." : "Reserve Now"}
        </button>
      </form>
    </div>
  );
};

const generateTimeOptions = () => {
  const times = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  return times.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));
};

export default BookTable;
