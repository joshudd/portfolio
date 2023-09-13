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
        grey: "#D0D0D0",
        white: "#DDDDDD",
        primary: "#648CB1",
      },
    },
  },
  plugins: [],
};
