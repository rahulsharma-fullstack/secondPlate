/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#37a169', // green-500
        'primary-dark': '#2f855a', // green-700
        'primary-light': '#68d391', // green-300
        secondary: '#2d3748', // gray-800
        accent: '#e53e3e', // red-500
        background: '#f7fafc', // gray-50
        text: '#2d3748', // gray-800
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [],
};
