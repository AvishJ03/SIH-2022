/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3E59",
        secondary: "#79AEF5",
        bg: "#FFF9F9",
        graymain: "#DDDBDB",
        lightBlue: "#D6E8FB",
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
