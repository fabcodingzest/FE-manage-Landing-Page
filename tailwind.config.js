module.exports = {
  purge: {
    content: ["./public/**/*.html", "./public/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      red: "0.2rem 1.2rem 0.4rem -0.2rem hsl(12,88%,90%)",
    },
    extend: {
      colors: {
        primary: {
          blue: "hsl(228, 39%, 23%)",
          red: "hsl(12, 88%, 59%)",
        },
        neutral: {
          "grayish-blue": "hsl(227, 12%, 61%)",
          "dark-blue": "hsl(233, 12%, 13%)",
          "pale-red": "hsl(13, 100%, 96%)",
          "light-gray": "hsl(0, 0%, 98%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
