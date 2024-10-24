import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const TeamMembar = () => {
    return (
        <>
        <h1 className="text-5xl font-bold font-serif text-center">Our Master CHEF's</h1>
  
        <div className="flex flex-wrap justify-center items-center gap-16 p-4">
          <div className="relative flex flex-col  items-center justify-center bg-gray-100 p-4 w-60 h-80 shadow-md rounded-lg group overflow-hidden">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/C7sTzhp/hero-removebg-preview-removebg-preview.png"
                alt="Team Member 1"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
  
            <div className="text-center">
              <h2 className="text-lg font-semibold">Team Member 1</h2>
              <p className="text-sm text-gray-600">Position</p>
            </div>
  
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex space-x-2 mt-4 opacity-0 group-hover:opacity-100">
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4 w-60 h-80 shadow-md rounded-lg group overflow-hidden">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <img
                src="/images/team-2.jpg"
                alt="Team Member 2"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">Team Member 2</h2>
              <p className="text-sm text-gray-600">Position</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex space-x-2 mt-4 opacity-0 group-hover:opacity-100">
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4 w-60 h-80 shadow-md rounded-lg group overflow-hidden">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <img
                src="/images/team-3.jpg"
                alt="Team Member 3"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">Team Member 3</h2>
              <p className="text-sm text-gray-600">Position</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex space-x-2 mt-4 opacity-0 group-hover:opacity-100">
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4 w-60 h-80 shadow-md rounded-lg group overflow-hidden">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <img
                src="/images/team-4.jpg"
                alt="Team Member 4"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">Team Member 4</h2>
              <p className="text-sm text-gray-600">Position</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex space-x-2 mt-4 opacity-0 group-hover:opacity-100">
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default TeamMembar;