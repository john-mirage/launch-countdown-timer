const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "368px",
      md: "560px",
      lg: "752px",
    },
    colors: {
      "grayish-blue": "hsl(237, 18%, 59%)",
      "soft-red": "hsl(345, 95%, 68%)",
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(234, 17%, 12%)",
      "dark-desaturated-blue": "hsl(236, 21%, 26%)",
      "very-dark-desaturated-blue": "#2C2C44",
      "very-dark-blue": "hsl(235, 16%, 14%)",
    },
    letterSpacing: {
      "title": "0.375rem",
      "time-xs": "0.1875rem",
    },
    extend: {
      spacing: {
        "display-xs": "3.3125rem",
        "display-sm": "4.25rem",
        "display-md": "6.625rem",
        "display-lg": "9.25rem",
      },
      height: {
        "pannel-xs": "3.125rem",
        "pannel-sm": "4rem",
        "pannel-md": "6.25rem",
        "pannel-lg": "8.6875rem",
      },
      fontFamily: {
        sans: [
          'Red Hat Text',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      fontSize: {
        "time-unit-xs": "0.4375rem",
        "time-xs": "2.25rem",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
}
