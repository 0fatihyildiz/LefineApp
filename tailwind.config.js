/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#5A1BFF',
        secondary: '#C3ACFF',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
};
