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
        'text-projects-color': 'var(--text-projects-color)',
        'text-projects-hover-color': 'var(--text-projects-hover-color)',
        'text-about-color': 'var(--text-about-color)',
        'text-about-hover-color': 'var(--text-about-hover-color)',
      },
      height: {
        '200': '200vh',
      },
    },
  },
  plugins: [],
}
export default config
