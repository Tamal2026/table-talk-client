/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 22s linear infinite",
      },
      transitionDelay: {
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [daisyui],
};
