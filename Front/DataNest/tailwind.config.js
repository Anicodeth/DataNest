/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor:{
      primary: ["#082661"],
      secondary:["#10c0d5"],
      purple:["#9415d2"]
    },
    fontFamily:{
      IMFrench:['IM Fell French Canon', "serif"],
      LeagueSpartan:['League Spartan', "sans-serif"],
      Montserrat: ['Montserrat', "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      Ubuntu: ['Ubuntu', "sans-serif"],
    }
  },
  plugins: [],
}