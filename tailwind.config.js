/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      transitionDelay: {
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class instead of media query
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Optionally use DaisyUI's themes
  },
};
