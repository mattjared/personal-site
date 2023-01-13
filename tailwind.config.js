/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'jumbo': 'calc(6vw)',
      },
      colors: {
        'mainBlue': '#0d2d68',
        'altBlue': '#51d1b9',
        'current': 'currentColor',
      },
      opacity: {
        "2": "0.025"
      },
      boxShadow: {
        DEFAULT: "currentColor 0px 0px 0px 1px",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
