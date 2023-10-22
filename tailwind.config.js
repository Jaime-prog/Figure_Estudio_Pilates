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
        other: '#D2E0FB',
        primary: '#1E3A8A'
      },
    },
  },
  variants: {},
  plugins: [],
}
