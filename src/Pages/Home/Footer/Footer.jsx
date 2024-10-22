import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <footer className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Section */}
          <nav>
            <h6 className="text-lg font-semibold text-orange-400 mb-4">Services</h6>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Order Food</a>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Book a Table</a>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Catering</a>
            <a className="block text-gray-300 hover:text-orange-400">Private Events</a>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="text-lg font-semibold text-orange-400 mb-4">Company</h6>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">About Us</a>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Contact</a>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Careers</a>
            <a className="block text-gray-300 hover:text-orange-400">Media Kit</a>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="text-lg font-semibold text-orange-400 mb-4">Legal</h6>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Terms of Service</a>
            <a className="block text-gray-300 hover:text-orange-400 mb-2">Privacy Policy</a>
            <a className="block text-gray-300 hover:text-orange-400">Cookie Policy</a>
          </nav>

          {/* Opening Hours Section */}
          <div>
            <h6 className="text-lg font-semibold text-orange-400 mb-4">Opening Hours</h6>
            <ul>
              <li className="text-gray-300 mb-1">Monday - Saturday: 12 PM - 11 AM</li>
              <li className="text-gray-300">Sunday: 10 AM - 11:30 PM</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <form className="md:col-span-2 lg:col-span-1">
            <h6 className="text-lg font-semibold text-orange-400 mb-4">Newsletter</h6>
            <fieldset className="w-full">
              <label className="block text-gray-300 mb-2">Get our latest updates</label>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered w-full p-2 rounded-md sm:rounded-r-none sm:rounded-l-md mb-2 sm:mb-0"
                />
                <button className="btn bg-orange-500 text-white px-4 rounded-md sm:rounded-l-none sm:rounded-r-md">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">© 2024 Restaurant. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-orange-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
