/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: {
          700: "#202531",
        },
        foreground: "#cee",
      }
    },
  },
  plugins: [],
};
