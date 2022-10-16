const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        '2xl': '1600px'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          100: "#EEF5FF",
          150: "#DFE1F0",
          200: "#A0A3BD",
          800: "#0F4471",
          900: "#404456",
          950: "#2C3A4B",
        },
        red: {
          900: "#E02025"
        },
        gray: {
          50: "#F8F8F8",
          600: "#666666",
          700: "#343434",
          800: "#1C1C1C",
          900: "#111111",
        }
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%'
      },
      shadow: {
        md: '0px 2px 10px'
      }
    },
  },
}
