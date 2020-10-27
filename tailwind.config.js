module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1c20",
        primary: "#7B341E",
        secound: {
          1: "#87431d",
          2: "#c87941",
        },
        light: "#f4f4f4",
        soft: "#dbcbbd",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
    inset: {
      0: 0,
      "1/2": "50%",
    },
    minWidth: {
      80: "80px",
      150: "150px",
      250: "250px",
    },
    minHeight: {
      80: "80px",
    },
    listStyleType: {
      "lower-alpha": "lower-alpha",
    },
  },
  variants: {},
  plugins: [],
};
