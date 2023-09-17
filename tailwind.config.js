/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./src/components/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"SFPro"', "sans-serif"],
        sans: ['"AndaleMono"', "sans-serif"],
      },
      colors: {
        black: "#0B0B0B",
        lighterblack: "#101010",
        grey: "#A3A3A3",
        darkgrey: "#E5E5E5",
        white: "#DDDDDD",
        // primary: "#8D5A97",
        primary: "#A273AB",
        // primary: "#49A8FF",
      },
    },
  },
  plugins: [],
};
