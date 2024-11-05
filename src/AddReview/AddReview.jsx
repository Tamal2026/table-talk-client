import { useContext, useState } from "react";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddReview = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);

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
        } else {
          alert("Failed to submit the review. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Your Review</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1>
            <span className="font-semibold">Username :</span>{" "}
            <span className="text-blue-500 font-mono">{user?.displayName}</span>{" "}
          </h1>
          <label className="block text-gray-700 font-medium mb-2">
            Rating:
          </label>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleStarClick(index)}
                className={`cursor-pointer text-2xl ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="review"
          >
            Review:
          </label>
          <textarea
            id="review"
            className="w-full p-2 border rounded-md"
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
