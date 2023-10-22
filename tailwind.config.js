// tailwind.config.js
module.exports = {
  content: [
    './views/**/*.html',
    './views/**/*.js',
    './views/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
