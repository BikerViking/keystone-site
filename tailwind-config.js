module.exports = {
  content: [
    './index.html',
    './main.js',
    './calendar.js',
    './portal.js',
    './theme.js',
    './src/document-verification.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        platinum: '#E5E5E5',
        lightgray: '#F5F5F5',
        mediumgray: '#888888',
        darkgray: '#444444',
        darkbg: '#1a1a1a'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  safelist: [
    'bg-charcoal', 'text-white', 'text-charcoal', 'bg-lightgray',
    'border-mediumgray', 'text-darkgray', 'text-platinum',
    'text-mediumgray', 'opacity-70', 'cursor-not-allowed',
    'bg-green-100', 'bg-yellow-100', 'bg-blue-100',
    'text-green-600', 'text-green-800', 'text-yellow-600',
    'text-yellow-800', 'text-blue-800', 'text-red-600'
  ]
};
