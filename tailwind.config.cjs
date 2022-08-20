/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      margin: {
        'marginOne': '30px 0'
      },
      padding: {
        'paddingOne': '20px 10px',
        'paddingTwo': '20px 40px'
      }
    },
  },
  plugins: [],
}
