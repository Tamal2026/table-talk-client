import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container flex justify-between px-10 pt-4 mx-auto  max-w-screen-2xl bg-black">
        <div className="logo">
          <Image
            className="h-10 w-auto md:h-12 lg:h-16"
            src={Logo}
            alt="This is logo of Restaurant"
          />
        </div>
        <div className="Navbar-list flex justify-between items-center">
          <ul className="flex space-x-6 list-none text-white">
            <li>HOME</li>
            <li>MENU</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>GALLERY</li>
            <li>SERVICE</li>
          
          </ul>
        </div>
      </div>
    </>
  );
}
