import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        secondary: ['var(--font-playfair-display)', 'serif'],
      },
      colors: {
        dark: '#2c2f24',
        orange: 'rgb(236, 86, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
