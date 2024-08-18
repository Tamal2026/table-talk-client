import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Hero() {
  return (
    <>
      <div className="hero-container flex justify-between px-6 max-w-screen-2xl mx-auto items-center space-x-5 bg-black text-white">
        <div>
          <h1 className="font-bold text-5xl">
            Enjoy Our <br />
            Delicious Meal
          </h1>
          <h3 className="my-5">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br />{" "}
            Aliqu diam amet diam etos. Clita erat ipsum et lorem et sit, sed
            stet lorem <br /> sit clita duo  magna dolore erat amet
          </h3>

          <button className="text-white font-semibold text-xl px-4 py-2 rounded-lg  bg-orange-500">
            Book a Table
          </button>
        </div>
        <div>
          <Image
            className="mt-10 animate-spin-slow"
            src={hero}
            alt="This is img of platter"
            height={680}
            width={500}
          ></Image>
        </div>
      </div>
    </>
  );
}
