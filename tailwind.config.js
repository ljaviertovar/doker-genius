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
      backgroundColor: {
        "custom-gray-bg": "#F8F8F8",
        "custom-gray": "#171717",
        "custom-dark-gray": "#1D1D1D",
        "frame-gray": "EEEEEE",
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
