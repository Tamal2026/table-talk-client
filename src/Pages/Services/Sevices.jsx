import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Sevices = () => {
    return (
        <div className="service-container py-10 px-5 bg-gray-100 max-w-screen-2xl mx-auto">
          <SectionTitle  subHeading={"Our Services"}
          heading={"Explore Our Service"}></SectionTitle>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="service-item p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "240px",
                padding: "24px",
                margin: "0 auto",
              }}
            >
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h2 className="text-xl font-semibold mb-2">MASTER CHEFS</h2>
              <p>
                Our master chefs are renowned for their culinary skills and
                creativity in the kitchen.
              </p>
            </div>
    
            <div
              className="service-item p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "240px",
                padding: "24px",
                margin: "0 auto",
              }}
            >
              <div className="text-4xl mb-4">🍽️</div>
              <h2 className="text-xl font-semibold mb-2">QUALITY FOOD</h2>
              <p>
                We use only the finest ingredients to ensure the best quality in
                every dish we serve.
              </p>
            </div>
    
            <div
              className="service-item p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "240px",
                padding: "24px",
                margin: "0 auto",
              }}
            >
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-xl font-semibold mb-2">ONLINE ORDER</h2>
              <p>
                Convenient online ordering system for you to place orders from the
                comfort of your home.
              </p>
            </div>
    
            <div
              className="service-item p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "240px",
                padding: "24px",
                margin: "0 auto",
              }}
            >
              <div className="text-4xl mb-4">⏰</div>
              <h2 className="text-xl font-semibold mb-2">24/7 SERVICE</h2>
              <p>
                We are available around the clock to serve you whenever you need us.
              </p>
            </div>
          </div>
        </div>
      );
};

export default Sevices;