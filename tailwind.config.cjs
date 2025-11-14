module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2', // Material Blue
        secondary: '#9c27b0', // Material Purple
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
