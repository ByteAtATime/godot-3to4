/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: {
          800: "#202531",
          700: "#262C3B",
          600: "#333B4F",
        },
        foreground: "#cee",
      }
    },
  },
  plugins: [],
};
