/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "#162542",
        "light-grey": "#7b8bad",
        "very-light-grey": "#e8eff2",
        orange: "#f16718",
        "light-orange": "#FF9B62",
      },
      fontSize: {
        "5.6rem": "5.6rem",
        "1.8rem": "1.8rem",
        "1.6rem": "1.6rem",
        "3.2rem": "3.2rem",
        "2.4rem": "2.4rem",
        "4.8rem": "4.8rem",
        "1.4rem": "1.4rem",
      },
      lineHeight: {
        "5.6rem": "5.6rem",
        "2.6rem": "2.6rem",
        "3.6rem": "3.6rem",
        "2.8rem": "2.8rem",
        "4.8rem": "4.8rem",
      },
      fontWeight: {
        500: "500",
        700: "700",
        900: "900",
      },
      maxWidth: {
        144: "144rem",
        54: "54rem",
      },
      height: {
        48: "48rem",
        23: "23rem",
      },
      screens: {
        xlg: { max: "75em" },
        lg: { max: "62.5em" },
        mid: { max: "56.25em" },
        smid: { max: "43.75em" },
        sma: { max: "37.5em" },
        xsm: { max: "28.75em" },
      },
      borderRadius: {
        "2rem": "2rem",
      },
    },
  },
  plugins: [],
};
