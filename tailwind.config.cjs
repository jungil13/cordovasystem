/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ecf7ff',
          100: '#d6ecff',
          200: '#add8ff',
          300: '#7abfff',
          400: '#4ea4ff',
          500: '#1e8aff',
          600: '#0f6dde',
          700: '#0c56ac',
          800: '#0a427f',
          900: '#083460',
        },
        accent: '#22c55e',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 118, 255, 0.12)',
      },
    },
  },
  plugins: [],
}

