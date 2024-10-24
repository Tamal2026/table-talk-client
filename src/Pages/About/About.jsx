import { FaUtensils } from "react-icons/fa";


const About = () => {
    return (
        <>
        <main className="container flex flex-col md:flex-row justify-normal gap-10 max-w-screen-2xl mx-auto p-4 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="w-full h-48 sm:w-72 sm:h-72 flex justify-center items-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
                alt="Small img 1"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
  
            <div className="w-full h-48 sm:w-72 sm:h-72 flex justify-center items-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
                alt="Medium img 1"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
  
            <div className="w-full h-48 sm:w-72 sm:h-72 flex justify-center items-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
                alt="Medium img 2"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
  
            <div className="w-full h-48 sm:w-72 sm:h-72 flex justify-center items-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
                alt="Small img 2"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
  
          <div className="text-section mt-8 md:mt-0 md:max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <h2 className="text-xl md:text-2xl flex items-center mb-4">
              Welcome to{" "}
              <span className="ml-2 flex items-center">
                <FaUtensils className="text-blue-500 ml-1" />  Table Talk
              </span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              At Table Talk, we're passionate about bringing people together over
              delicious food. Whether you're craving a comforting meal, exploring
              new cuisines, or just enjoying your favorite dishes, our mission is
              to make every dining experience special. With a commitment to
              quality, freshness, and customer satisfaction, we serve up the best
              flavors right to your doorstep. Join us on a culinary journey and
              discover the joy of great food, anytime, anywhere. Welcome to the
              Table Talk family—where every meal is a celebration!
            </p>
            <hr className="my-5" />
  
            <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 md:gap-10">
              <div className="flex items-center gap-4 md:gap-6">
                <h1 className="font-bold text-2xl md:text-3xl text-blue-500">15</h1>
                <h1 className="text-sm md:text-base">
                  Years of <br /> <span className="font-bold">EXPERIENCE</span>
                </h1>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <h1 className="font-bold text-2xl md:text-3xl text-blue-500">50</h1>
                <h1 className="text-sm md:text-base">
                  Popular <br /> <span className="font-bold">MASTER CHEFS</span>
                </h1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto">
              <button className="bg-sky-500 px-4 py-2 my-3 text-white text-lg md:text-xl font-bold w-full mt-10">
                Read More
              </button>
            </div>
          </div>
        </main>
      </>
    );
};

export default About;