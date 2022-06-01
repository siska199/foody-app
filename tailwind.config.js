module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '992px',
      'lg-md': '1024px',
      'lg': '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'dark-theme': '#0e172c',
        'light-theme': '#f5f3f3',
        'text-light': '#515151',
        'text-dark': 'white',
        'red-custome': '#e80013',
        'orange-custome': '#515151',
      },

      boxShadow: {
        'dark-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')], //require("tailwind-scrollbar")
}
