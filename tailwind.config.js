module.exports = {
  content: [
    './views/*.html',
    './styles/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['EB Garamond', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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
