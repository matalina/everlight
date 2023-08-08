/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",'./_site/**/*.html',],
  theme: {
    extend: {
      fontFamily: {
        journal: ['Roboto Condensed', 'sans-serif'],
        alex: ['Gloria Hallelujah', 'cursive'],
        nox: ['Architects Daughter','cursive']
      }
    },
  },
  plugins: [],
}
