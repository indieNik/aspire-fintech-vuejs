module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#01D167',
        'secondary': '#0C365A',
        'light': '#F5F9FF',
        'dark': '#325BAF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
