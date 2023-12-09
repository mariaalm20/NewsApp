/** @type {import('tailwindcss').Config} */

const theme = require('./theme.json');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: theme.colors,
    extend: {
      fontFamily: {
        'n-bold': ['Mulish-Bold'],
        'n-light': ['Mulish-Light'],
        'n-medium': ['Mulish-Medium'],
        'n-regular': ['Mulish-Regular'],
      },
    },
  },
  plugins: [],
};
