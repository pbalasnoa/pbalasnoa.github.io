module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        elephant: {
          DEFAULT: "#102F40",
          50: "#3A99CE",
          100: "#318FC3",
          200: "#2877A2",
          300: "#205F81",
          400: "#184761",
          500: "#102F40",
          600: "#050E13",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        casablanca: {
          DEFAULT: "#F7B83F",
          50: "#FEF9EF",
          100: "#FEF2DC",
          200: "#FCE3B5",
          300: "#FAD58D",
          400: "#F9C666",
          500: "#F7B83F",
          600: "#F4A40A",
          700: "#BE8008",
          800: "#885B06",
          900: "#523703",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        spin_message: "spin_message 25s infinite",
      },
      keyframes: {
        spin_message: {
          "15%": {
            transform: "translateY(-112%)",
          },
          "30%": {
            transform: "translateY(-100%)",
          },
          "40%": {
            transform: "translateY(-212%)",
          },
          "55%": {
            transform: "translateY(-200%)",
          },
          "65%": {
            transform: "translateY(-312%)",
          },
          "80%": {
            transform: "translateY(-300%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
