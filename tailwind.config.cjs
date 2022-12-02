/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#283040",
          300: "#29477D",
          900: "#0F1A2E",
        },
      },
    },
  },
  plugins: [],
};
