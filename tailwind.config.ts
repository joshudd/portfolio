import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        darkgrey: "#5C5C5C",
        white: "#DDDDDD",
        // primary: "#8D5A97",
        primary: "#A273AB",
        // primary: "#49A8FF",
      },
    },
  },
  plugins: [],
}
export default config
