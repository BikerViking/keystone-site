/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '3rem'
      }
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