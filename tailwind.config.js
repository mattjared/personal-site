/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
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
        bottom: "currentColor 0px 1px 0px 0px"
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#51d1b9',
            h1: {
              color: '#51d1b9'
            },
            h2: {
              color: '#51d1b9'
            },
            h3: {
              color: '#51d1b9'
            },
            h4: {
              color: '#51d1b9'
            },
            h5: {
              color: '#51d1b9'
            },
            h6: {
              color: '#51d1b9'
            },
            a: {
              color: '#ffffff',
              '&:hover': {
                color: '#51d1b9',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
