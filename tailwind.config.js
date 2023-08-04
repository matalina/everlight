/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",'./_site/**/*.html',],
  theme: {
    extend: {
      fontFamily: {
        journal: ['Dosis', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
