/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-one': 'url("../images/bgimage2.jpg")'
      },
      colors: {
        sil: {
          secondary: '#BADA55',
          DEFAULT: '#0092FF',
          accent: '#2c1e55'
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
