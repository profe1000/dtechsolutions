/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-950": "#052e16",
        "green-500": "#22c55e",
        "green-100": "#dcfce7",
        "stone-900": "#232624",
        "stone-400": "#f5f0f0",
        "stone-300": "#D9D9D9",
        "stone-200": "#F5F0F0",
        "stone-100": "#EDEDED",
        "red-950": "#C91F4B",
        "red-500": "#cd2f4c",
        "orange": "#EA903F"
      },
    },
  },
  plugins: [],
};
