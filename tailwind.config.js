/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./src/components/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SFPro"', "sans-serif"],
      },
      colors: {
        black: "#0B0B0B",
        lighterblack: "#101010",
        grey: "#A3A3A3",
        white: "#DDDDDD",
        // primary: "#648CB1",
        primary: "#49A8FF",
      },
    },
  },
  plugins: [],
};
