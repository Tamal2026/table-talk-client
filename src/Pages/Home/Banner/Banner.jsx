import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'animate.css'; // Ensure animate.css is imported

const Banner = () => {
  return (
    <div className="  relative">
     
      
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={1000}
        infiniteLoop={true}
        showStatus={false}
        className="w-full"
      >
        <div className="relative">
          <img
            src="https://i.ibb.co.com/jTy5fY6/bg-img1.jpg"
            alt="Banner 1"
            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co.com/dJnKNZD/bg-pizza.jpg"
            alt="Banner 2"
            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co.com/nLLZG9W/bg-spaghetti.jpg"
            alt="Banner 3"
            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
      </Carousel>
      <div className="flex justify-between items-center mb-4">
       
       <div className="w-1/4 p-6 text-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg transition duration-300 hover:scale-105 relative overflow-hidden">
         <h2 className="text-2xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Special Offers</h2>
         <p className="text-white mt-2 animate__animated animate__fadeIn animate__delay-2s">Get 20% off on your first order!</p>
         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"></div>
       </div>

     
       <div className="w-1/4 p-6 text-center bg-gradient-to-br from-green-500 to-teal-500 rounded-lg shadow-lg transition duration-300 hover:scale-105 relative overflow-hidden">
         <h2 className="text-2xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Join Our Club</h2>
         <p className="text-white mt-2 animate__animated animate__fadeIn animate__delay-2s">Sign up for exclusive deals!</p>
         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"></div>
       </div>
     </div>
    </div>
  );
};

export default Banner;
