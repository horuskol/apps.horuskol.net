module.exports = {
  purge: {
    content: [
      './public/**/*.html'
    ],
  },
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto'
      }
    },
  },
  variants: {},
  plugins: [],
}
