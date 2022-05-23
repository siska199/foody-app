module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-theme': '#0e172c',
        'light-theme': '#f5f3f3',
        'text-light': '#515151',
        'text-dark': 'white',
        'red-custome': '#e80013',
        'orange-custome': '#515151',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')], //require("tailwind-scrollbar")
}
