module.exports = {
  purge: {
    content: ["./public/**/*.html", "./public/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundPosition: {
      "top-right-4": "top -4rem right -4rem",
      "top-right-10": "top -10rem right -10rem",
      "bottom-left-33": "top 33rem right -33rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
