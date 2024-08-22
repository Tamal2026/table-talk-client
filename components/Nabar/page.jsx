import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-container flex justify-between px-10 pt-4 mx-auto max-w-screen-2xl bg-black">
      <div className="logo">
        <Image
          className="h-10 w-auto md:h-12 lg:h-16"
          src={Logo}
          alt="This is the logo of the Restaurant"
        />
      </div>
      <div className="Navbar-list flex justify-between items-center">
        <ul className="flex space-x-6 list-none text-white">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact"></Link> 
          </li>
          <li>
            <Link href="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link href="/service">SERVICE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
