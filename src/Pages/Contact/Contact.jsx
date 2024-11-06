import { FaEnvelope } from "react-icons/fa";
import Cover from "../Shared/Cover/Cover";

const Contact = () => {
  return (
    <>
      <Cover 
        img={"https://i.ibb.co.com/gR2bDjY/contact-us.jpg"} 
        titleName={"Contact Us"}
        short_desc={
          "Welcome to Table Talk! Enjoy fresh, chef-crafted dishes that blend tradition with modern flavors. Dine in, order online, or reserve a table – we’re here to make every meal memorable!"
        }
      ></Cover>
      
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fadeIn">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 animate-fadeIn delay-100">
              Whether you need help with booking, have general inquiries, or
              need technical support, we're here to help!
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-4 mb-12">
            <div className="w-full md:w-1/3 px-4 mb-8 animate-slideInLeft">
              <div className="flex items-center transform transition duration-500 hover:scale-105">
                <FaEnvelope className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Booking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">booking@fooddelivery.com</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8 animate-fadeIn delay-200">
              <div className="flex items-center transform transition duration-500 hover:scale-105">
                <FaEnvelope className="text-green-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    General
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">general@fooddelivery.com</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8 animate-slideInRight delay-400">
              <div className="flex items-center transform transition duration-500 hover:scale-105">
                <FaEnvelope className="text-sky-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Technical
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">technical@fooddelivery.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 animate-slideInLeft">
              <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Phone: +1 234 567 890 <br />
                  Email: contact@fooddelivery.com <br />
                  Address: 123 Food Street, Delicious City, FL
                </p>
                <iframe
                  className="w-full h-64 rounded-lg transition duration-500 hover:shadow-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509164!2d144.95373521531712!3d-37.816279379751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3b5bdb3e0!2sFood%20Street!5e0!3m2!1sen!2sus!4v1616173023633!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 animate-slideInRight">
              <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Send Us a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition duration-200 hover:shadow-lg"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition duration-200 hover:shadow-lg"
                      type="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-yellow-500 dark:focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition duration-200 hover:shadow-lg"
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-600"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
