/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // If HTML is in src folder
    "./*.{html,js}",        // If HTML is in project root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
