module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        '4xl' : '2.5rem'
      },
      maxWidth:{
        '4xl': '58rem'
      }
    },
    colors : {
      'bright-orange': '#e38826', 
      'dark-cyan': '#006970',
      'very-dark-cyan': '#004241',
      'light-gray': '#f2f2f2',
      'transparent-white':'#ffffffbf', 
      'transparent': 'transparent',
      'white': '#ffffff'
    },
    fontFamily : {
      'lexend-deca': ['"Lexend Deca"', 'sans-serif'], 
      'big-shoulders': ['"Big Shoulders Display"', 'cursive']
    }
  },
  plugins: [],
}
