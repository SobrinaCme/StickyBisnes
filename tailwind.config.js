/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ffc8dd',
          DEFAULT: '#ff99cc',
          dark: '#ff66b2',
        },
      },
    },
  },
  plugins: [],
}