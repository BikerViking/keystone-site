module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
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
      fontSize: {
        'fluid-2xl': 'clamp(1.5rem, 1.2vw + 0.9rem, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5vw + 1rem, 2.25rem)',
      },
    },
  },
  plugins: [],
};
