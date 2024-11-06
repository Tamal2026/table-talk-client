import { useContext, useState } from "react";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const AddReview = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      name: user.displayName,
      review,
      rating,
      date: new Date().toLocaleDateString(),
    };

    axiosPublic
      .post("/reviews", reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thanks For your review",
            showConfirmButton: false,
            timer: 1500,
          });
          setReview("");
          setRating(0);
          navigate("/");
        } else {
          Swal.fire({
            icon: "warning",
            title: "Please Try again later",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Add Your Review
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h1 className="text-gray-600 font-medium">
              <span className="font-semibold">Username:</span>{" "}
              <span className="text-blue-500 font-mono">
                {user?.displayName}
              </span>
            </h1>
            <label className="block text-gray-700 font-medium mb-2">
              Rating:
            </label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index)}
                  className={`cursor-pointer text-3xl transition-all duration-300 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  } hover:text-yellow-400`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="review"
            >
              Review:
            </label>
            <textarea
              id="review"
              className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              rows="5"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Submit Review
          </button>
        </form>
      </div>
      <Link to={"/"}>
        <button className="flex items-center btn bg-sky-600 text-white mx-auto mt-7">
          <FaHome></FaHome>
          <h1>Back to Home</h1>
        </button>
      </Link>
    </>
  );
};

export default AddReview;
