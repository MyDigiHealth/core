/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#26c0f7",
        secondary: "",
        background: "",
        foreground: "#a9a9a9",
        front: "#1a1a1a",
        back: "",
      },
      fontFamily: {
        raleway: "Raleway, sans-serif",
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
