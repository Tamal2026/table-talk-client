import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container flex justify-between px-10 pt-4 mx-auto max-w-screen-2xl bg-black">
      <div className="logo">
        <Image
          src={Logo}
          alt="This is the logo of the Restaurant"
          width={64}
          height={64}
          className="h-10 w-auto md:h-12 lg:h-16"
        />
      </div>
      <div className="Navbar-list flex justify-between items-center">
        <ul className="flex space-x-6 list-none text-white">
          <li>
            <Link href="/">HOME</Link>
          </li>

          <li>
            <Link href="/FoodMenu">MENU</Link>
          </li>
          <li>
            <Link href="/About">ABOUT</Link>
          </li>
          <li>
            <Link href="Contact">CONTACT</Link>
          </li>
          <li>
            <Link href="/Gallery">GALLERY</Link>
          </li>
          <li>
            <Link href="/Service">SERVICE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
