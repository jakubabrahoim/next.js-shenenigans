/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'alabaster': '#f2eee3',
        'jet': '#5b475c',
        'jet-200': '#503e51',
        'jet-300': '#443545',
        'orchid': '#cb769e',
        'orchid-200': '#b14377',

      }
    },
  },
  plugins: [],
}
