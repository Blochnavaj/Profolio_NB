 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#FAFAFA'
      },
      fontFamily: {
        'afacad-flux': ['"Afacad Flux"', 'serif'], // Add your custom font family
      },
      backgroundImage: {
        'custom-conic': 'conic-gradient(#04b0ee 20deg, transparent 120deg)',
      },
      spacing: {
        '-25p': '-25%', // Adds support for -25% in top/left/right/bottom
      },
    },
  },
  plugins: [],
}