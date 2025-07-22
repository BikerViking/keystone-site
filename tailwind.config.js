module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './templates/**/*.{njk,html}',
    './**/*.js',
    './**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        charcoal: '#1a1a1a',
        platinum: '#e5e5e5',
        silver: '#cccccc',
        white: '#ffffff'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  }
};
