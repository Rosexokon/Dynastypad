/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
      },
      flex: {
        '2': '2 2 0%'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'bg-dark': '#1C1E1E',
      'brand1': '#4176FF',
      'white': '#FFFFFF',
      'brand2': 'rgba(32, 99, 242, 0.25)',
      'brand3': 'rgba(32, 99, 242)',
      'brand4': '#2063F2',
      'brand5': 'rgba(255, 115, 174, 0.25)',
      'brand6': 'rgba(255, 115, 174)',
    }
  },
  plugins: [],
}