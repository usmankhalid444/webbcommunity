module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        custom:{
          darkblue:"#00033C",
          lightblue:"#5F68A6",
          purple:"#575EF6",
          green:"#3ACC40",
          lightgreen:"#F6F8FB",
          lightgray:"#9EA4C9",
        }
      },
       lineHeight: {
         'extra-loose': '3.5',
         '12': '3rem',
        },
       spacing: {
        "1100p":"1100px",
        "800p":"800px",
        "269px":"269px",
        "563px":"563px",
        
        // "90vh":"450px"
      },
      fontSize:{
        "34px": "34px" 
      },
      backgroundImage: {
         'hero-background': "url('/assets/hero-hall.jpg')",
      },
      outline:{
        solid:['2px solid #E1E7EF','1px'],
        blue:['1px solid #6169A0','-1px'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      outline:['hover','focus'],
      border:['hover'],
      borderColor:['hover'],
      borderWidth:['hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],


    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
