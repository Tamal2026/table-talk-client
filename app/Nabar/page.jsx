"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname()
const links =
[
  {
    title:"About",
    path:"/About"
  },
  {
    title:"Service",
    path:"/Service"
  },
  {
    title:"Contact",
    path:"/Contact"
  },
  {
    title:"Gallery",
    path:"/Gallery"
  },
  {
    title:"Menu",
    path:"/FoodMenu"
  },
]


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
        {
          links?.map((link=><Link className={`${pathName === link.path && "bg-red-500"}`} key={link.path} href={link.path}>{link.title}</Link>))
        }
        </ul>
      </div>
    </div>
  );
}
