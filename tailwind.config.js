module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#1e1b4b",
        "bookmark-red": "#990000",
        "bookmark-blue": "#001433",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#F7F7F7",
        "bookmark-dark": "#02080C",
        "bookmark-green": "#14532d",
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
