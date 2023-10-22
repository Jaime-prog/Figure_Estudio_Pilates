module.exports = {
  content: [
    './views/*.html',
    './styles/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        mycolor: '#D2E0FB',
      },
    },
  },
  variants: {},
  plugins: [],
}
