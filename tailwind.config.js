/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009444",
        secondary: " #ffb60a",
        blue100: "#0267ff",
        info: "#767b81",
        success: "#39b54a",
        warning: " #f4a408",
        warning: " #d90429",
        grey01: "#9ba2ac",
        grey02: "#d4d7db",
        grey03: "#f2f2f2",
        grey04: " #f8f8f8",
        white: "#ffffff",
        green01: " #02b554",
        green02: " #02cb5e",
        green03: " #17db71",
        black01: "#202021",
        black02: "#454545",
        black03: "#7b7b7b",
        pastelblue: "#edf5fe",
        pastelgreen: "#ebf6f0",
        pastel03: " #fff8e7",
        pastel04: "#fff8e7",
      },
      screens: {
        laptop: { max: "1100px" },
        tablet: { max: "950px" },
        minitablet: { max: "768px" },
        mobile: { max: "600px" },
      },
    },
  },
};
