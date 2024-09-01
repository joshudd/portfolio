import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background-color': 'var(--background-color)',
        'background-transparent-color': 'var(--background-transparent-color)',
      },
      textColor: {
        'text-color': 'var(--text-color)',
        'text-hover-color': 'var(--text-hover-color)',
      },
      height: {
        '200': '200vh',
      },
      // fontFamily: {
      //   mono: ['var(--font-robotomono)'],
      // },
    },
  },
  plugins: [],
}
export default config
