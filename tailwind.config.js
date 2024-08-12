/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      "color-bg": "|#FFFFFF",
      "text":"#e0334c",
      "text2":"#1e1e1e"
    }
    },
  },
  container:{
    center:true,
    padding:{
      default:"1rem",
      sm: "3rem"
    }
    

  },
  plugins: [],
}