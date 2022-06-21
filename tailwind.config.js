/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2EC54',
        gray: {
          600: '#52525B',
        },
        iris: {
          100: '#5D5FEF',
        },
      },
    },
  },
  plugins: [],
};
