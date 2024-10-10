/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'], // Define the custom font here
      },
      colors: {
        themePrimary: '#F2890C', // Replace with your desired color value
        Dropdown: '#yourColorCode',
        BorderCard:"",
        btnPrimary: {
          bgColor: '#yourColorCode', // Replace with your desired color code,
          fontColor:"",
          borderColor:"",
          hoverbgColor:"",
          hoverborderColor:""
        },
        btnLight:{
          bgColor:"",
          fontColor:"",
          borderColor:"",
          hoverbgColor:"",
          hoverborderColor:""
        },
        btnPos:"",
        borderFormgroup:"",
        modalContent:"",
        floatLeft:""
        
      },
      screens: {
        'max-md': { 'max': '768px' },  // This creates a max-width breakpoint for 'md' (768px)
      },
    },
  },
  plugins: [],
}

