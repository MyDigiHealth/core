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
        primary: "#086e96",
        secondary: "",
        background: "#ffffff",
        foreground: "#a9a9a9",
        front: "#1a1a1a",
        back: "#ffffff",
      },
      fontFamily: {
        raleway: "Raleway, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
