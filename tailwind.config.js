module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#00509e', // A blue color similar to the one on Fiskeridirektoratet
          secondary: '#002f4f', // A darker blue
          accent: '#f8f9fa', // Light gray for backgrounds
          textPrimary: '#212529', // Dark gray for text
        },
        fontFamily: {
          sans: ['Arial', 'Helvetica', 'sans-serif'], // Similar to the fonts used on the site
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  