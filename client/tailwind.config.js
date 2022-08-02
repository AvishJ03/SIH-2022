/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3E59",
        secondary: "#79AEF5",
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
