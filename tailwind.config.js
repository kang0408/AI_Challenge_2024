/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EA7027',
        secondary: '#333A73'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      screens: {
        m: '0px',
        xs: '480px'
      }
    }
  },
  plugins: []
};
