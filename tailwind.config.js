const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    colors: {},
    extend: {
      fontFamily: {
        sans: [
          'Red Hat Text',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  plugins: [],
}
