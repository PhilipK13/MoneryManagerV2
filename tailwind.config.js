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
        cBlue: '#457b9d',
        cDarkBlue: '#1d3557',
        cLightBlue: '#a8dadc',
        cWhite: '#f1faee',
        cLightWhite: '#ffffff'
        
      },
    },
  },
  plugins: [],
}