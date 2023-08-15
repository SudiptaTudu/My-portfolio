/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: 
    {
      height: {
        '55': '55px',
      },
      colors:{
        "C1":"#9400e7"
      },
      fontFamily:{
        F1:"'Play', sans-serif",
        F2:"'Concert One', cursive",
        F3:"Pangolin', cursive",
        F4:"'Josefin Sans', sans-serif",
        F5:"'Yeseva One', cursive",
        F6:"'Nunito Sans', sans-serif;"
      }, 

      spacing: {
        '12': '30px',}
    },

  
  plugins: [],}
}
