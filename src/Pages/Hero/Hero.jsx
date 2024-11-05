import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div
      className="flex max-w-screen-xl items-center justify-around mt-10 h-[300px] sm:h-[300px] md:h-[600px]  lg:w-full bg-no-repeat bg-contain bg-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/zPFJpsw/bg-hero.png")',
        backgroundColor: "transparent",
      }}
    >
      {/* Card Section */}
      <div className="Text-section bg-white/40 p-2 sm:p-2 md:p-6 rounded-lg flex flex-col items-center sm:w-[50%] md:w-[30%] lg:w-[25%]">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Enjoy Our</h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Delicious Meal</h1>
          <p className="text-xs sm:text-sm md:text-base mt-2 sm:mt-4">
            Experience flavors that inspire, crafted with passion <br /> and the
            freshest ingredients. Dine with us or <br /> enjoy from home—deliciousness awaits.
          </p>
        </div>
        <Link to={"/bookTable"}>
          <button className="mt-4 sm:mt-6 bg-orange-500 text-white font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-lg shadow-lg transition duration-300 transform hover:bg-orange-600 hover:scale-105 hover:shadow-xl">
            Book A Table
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="Image-Section">
        <img
          className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[400px] md:w-[400px] rounded-lg shadow-lg animate-spin-slow"
          src="https://i.ibb.co.com/Nxs7C9L/hero-modified.png"
          alt="Delicious Meal"
        />
      </div>
    </div>
  );
};

export default Hero;
