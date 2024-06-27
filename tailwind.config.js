/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,json}",
  ],
  theme: {
    extend: {
      colors: {
        BrandGreen: {
          50: '#eafff7',
          100: '#cdfee9',
          200: '#a0fad8',
          300: '#63f2c4',
          400: '#25e2ab',
          500: '#00cb97',//brand
          600: '#00a47a',
          700: '#008366',
          800: '#006752',
          900: '#005544',
          950: '#003028',
        },
        BrandBlue: {
          50: '#d3f1fa',
          100: '#52C2E6',
          200: '#3DACD6',
          300: '#2795C5',
          400: '#127FB5',
          500: '#016EA9',
          600: '#065E91',
          700: '#0A4D7A',
          800: '#0C446C',
        },
        BrandGray: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1e1e1e',
        },
      },
      fontSize: {
        'xs': '14px',
      },
      fontFamily: {
        'AvenirLight': ["'AvenirLight', 'sans-serif'"],
        'AvenirRoman': ["'AvenirRoman', 'sans-serif'"],
        'AvenirMedium': ["'AvenirMedium', 'sans-serif'"],
        'AvenirHeavy': ["'AvenirHeavy', 'sans-serif'"],
      },
      boxShadow: {
        'Box': '2px 4px 21px 0 rgba(0,0,0,.07)'
      },
      screens: {
        'sm': '640px', // => @media (min-width: 640px) { ... }
        'md': '768px', // => @media (min-width: 768px) { ... }
        'lg': '992px', // better: '1024px', // => @media (min-width: 1024px) { ... }
        'xl': '1140px', //original '1280px', // => @media (min-width: 1280px) { ... }
        '1xl': '1408px', // => @media (min-width: 1280px) { ... }
        '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      } 
    },
  },
  plugins: [],
}