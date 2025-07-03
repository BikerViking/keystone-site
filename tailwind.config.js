module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1000ms ease-out forwards',
        slideUp: 'slideUp 700ms ease-out forwards',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'bg-pan': 'bgPan 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bgPan: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
