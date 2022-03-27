const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      "grayish-blue": "hsl(237, 18%, 59%)",
      "soft-red": "hsl(345, 95%, 68%)",
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(234, 17%, 12%)",
      "dark-desaturated-blue": "hsl(236, 21%, 26%)",
      "very-dark-blue": "hsl(235, 16%, 14%)",
    },
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
