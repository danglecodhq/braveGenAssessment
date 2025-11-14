/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976d2', // Material Blue 700
          light: '#63a4ff', // Blue Light
          dark: '#004ba0', // Blue Dark
        },
        secondary: {
          DEFAULT: '#9c27b0', // Material Purple 500
          light: '#d05ce3',
          dark: '#6a0080',
        },
        success: {
          DEFAULT: '#4caf50', // Green 500
          light: '#80e27e',
          dark: '#087f23',
        },
        warning: {
          DEFAULT: '#ff9800', // Orange 500
          light: '#ffc947',
          dark: '#c66900',
        },
        error: {
          DEFAULT: '#f44336', // Red 500
          light: '#ff7961',
          dark: '#ba000d',
        },
        info: {
          DEFAULT: '#0288d1', // Cyan 700
          light: '#5eb8ff',
          dark: '#005b9f',
        },
        background: {
          DEFAULT: '#f5f5f5', // Material Grey 100
          paper: '#ffffff',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 8px 16px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        md: '6px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};
