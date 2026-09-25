/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist: ['block'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#e74c3c',
          600: '#c0392b'
        }
      },
      backgroundImage: {
        logo: "url('img/logo.png')"
      },
      screens: {
        mobile: '481px',
        tablet: '769px'
      }
    }
  },
  plugins: []
};
