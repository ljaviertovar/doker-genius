/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: ['placeholder'],
      colors: {
        "custom-dark": {
          "950": "#030306",
          "900": "#0d0c18",
          "850": "#181828",
          "800": "#242535",
          "500": "#232325",
          "150": "#A8A8A8",
          "100": "#C4C4C4",
          "50": "#E0E0E0"
        }
      },
      borderColor: {
        "custom-gray": "#171717",
      },
      placeholderColor: {
        'dark': '#FFFFFF',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
