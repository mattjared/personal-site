/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}',
    './@/**/*.{js,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "840px",
      },
    },
    extend: {
      fontFamily: {
        headline: ["var(--font-karla)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}