/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",   // important: include .ts because Angular templates often live in .ts or .html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
