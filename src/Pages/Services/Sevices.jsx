import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";

const Services = () => {
  return (
    <>
      {/* Cover Component with Adjustable Height */}
      <Cover 
        img="https://i.ibb.co/r3DKZZh/services.png" 
        titleName="Services" 
        short_desc="Enjoy our delicious food your way—dine in for a warm atmosphere or order online for quick delivery. We’re here to serve you, wherever you are!" 
        className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center text-center text-white"
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </Cover>

      {/* Service Section */}
      <div className="service-container py-10 px-5 bg-gray-100 dark:bg-gray-800 max-w-screen-2xl mx-auto">
        <SectionTitle
          subHeading="Our Services"
          heading="Explore Our Service"
        ></SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Individual Service Cards */}
          <div className="service-item p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-500 transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">MASTER CHEFS</h2>
            <p className="dark:text-gray-300">Our master chefs are renowned for their culinary skills and creativity in the kitchen.</p>
          </div>

          <div className="service-item p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-500 transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-4">🍽️</div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">QUALITY FOOD</h2>
            <p className="dark:text-gray-300">We use only the finest ingredients to ensure the best quality in every dish we serve.</p>
          </div>

          <div className="service-item p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-500 transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-4">📱</div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">ONLINE ORDER</h2>
            <p className="dark:text-gray-300">Convenient online ordering system for you to place orders from the comfort of your home.</p>
          </div>

          <div className="service-item p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-500 transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-4">⏰</div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">24/7 SERVICE</h2>
            <p className="dark:text-gray-300">We are available around the clock to serve you whenever you need us.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
