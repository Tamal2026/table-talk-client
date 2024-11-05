import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../UseAxiosPublic/UseAxiosPublic";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing arrow icons

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/reviews")
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, [axiosPublic]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative p-6 w-screen max-w-screen-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Customer Testimonials
      </h2>

      {testimonials.length > 0 ? (
        <div className="relative overflow-hidden">
          {/* Sliding Testimonial Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full p-8 bg-blue-50 rounded-lg shadow-lg"
              >
                <h3 className="font-semibold text-2xl text-blue-600 text-center">
                  {testimonial.name}
                </h3>
                <div className="flex items-center justify-center mt-1">
                  <div className="text-yellow-500 flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">
                    {testimonial.date}
                  </span>
                </div>
                <p className="mt-4 text-lg text-gray-700 text-center px-4">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>

          {/* Left and Right Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">No testimonials available.</p>
      )}
    </div>
  );
};

export default Testimonial;
