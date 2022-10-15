module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors : {
      pry : "#E8A902",
    },
    fontFamily : {
      'nunito' : ['Nunito', 'sans-serif'],
      'inter' : ['Inter', 'sans-serif'],
      'primary' : ['DM Serif Display', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ] 
}