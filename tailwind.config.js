/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-one': 'url("../images/bgimage1.jpg")',
        'hero-two': 'url("../images/abstractbg.jpg")'
      },
      colors: {
        sil: {
          secondary: '#BADA55',
          dark: '#2C1E55',
          DEFAULT: '#0092FF'
        }
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        raleway: 'Raleway, serif'
      }
    }
  },
  plugins: []
}
