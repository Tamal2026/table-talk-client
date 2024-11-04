import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-around  h-[600px] bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/zPFJpsw/bg-hero.png")',
        backgroundSize: "100% 100%",
        backgroundColor: "transparent",
      }}
    >
      <div className="Text-section bg-white/60 p-8 rounded-lg">
        <div>
          <h1 className="text-5xl font-bold">Enjoy Our</h1>
          <h1 className="text-5xl font-bold">Delicious Meal</h1>
          <p className="text-lg mt-4">
            Experience flavors that inspire, crafted with passion <br /> and the
            freshest ingredients. Dine with us or <br /> enjoy from home—
            deliciousness awaits.
          </p>
        </div>
        <Link to={"/bookTable"}>
          {" "}
          <button className="mt-8 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:bg-orange-600 hover:scale-105 hover:shadow-xl">
            Book A Table
          </button>
        </Link>
      </div>
      <div className="Image-Section">
        <img
          className="h-[500px] w-[500px] rounded-lg shadow-lg animate-spin-slow"
          src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
          alt="Delicious Meal"
        />
      </div>
    </div>
  );
};

export default Hero;
