/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          accent: '#4FD1C5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'fluid-2xl': 'clamp(1.5rem, 2vw + 1rem, 2rem)',
        'fluid-3xl': 'clamp(2rem, 3vw + 1rem, 3rem)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};