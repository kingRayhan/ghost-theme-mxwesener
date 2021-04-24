module.exports = {
  mode: "jit",
  purge: ["./**/*.hbs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00BB84",
        dark: "#403E3D",
      },
      fontFamily: {
        "rock-salt": ["Rock Salt", "cursive"],
        condensed: ["Futura Condensed", "cursive"],
      },
      spacing: {
        35: "135px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
