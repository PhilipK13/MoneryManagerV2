const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        gray: colors.neutral,
        customWhite: '#f1faee',
        customLightBlue: '#a8dadc',
        customBlue: '#457b9d',
        customDarkBlue: '#1d3557'
      },
    },
  },
  plugins: [],
}