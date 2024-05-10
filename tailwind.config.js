/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: '#ff003ba6', // Replace with your primary color
          DEFAULT: '#EDF4ED', // Replace with your primary color
        },
        secondary: {
          DEFAULT: '#79B791', // Replace with your secondary color
          // DEFAULT: '#C5E0D8', // Replace with your secondary color
        },
        tertiary: {
          DEFAULT: '#ABD1B5', // Replace with your tertiary color
        },
      },
    },
  },
  plugins: [],
}

