module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '50': '12.5rem',
        '62' : '15.5rem'
      },
      width:{
        '68': '17rem'
      },
      fontSize:{
        '4xl' : '2.5rem'
      },
    },
    colors : {
      'violet': '#674baf',
      'red': '#ff5c7c',
      'orange': '#ff8c66', 
      'yellow': '#f1c65b',
      'blue': '#56c2e6',
      'purple': '#7536d3',
      'green': '#4acf81',
      
      'light-gray': '#f2f2f2',
      'very-light-gray': '#fafafa',
      'grayish-blue': '#a3a5ae',
      'very-dark-blue': '#4c4e61',
      'transparent-white':'#ffffffbf', 
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily : {
      'rubik': ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
}
