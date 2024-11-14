/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a CSS class
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        dark: {
          primary: '#CFCFDD',
          secondary: '#008080',
          accent: '#26DA8A',
          background: '#22323C',
          additional: '#2F4858',
        },
        // Light Mode Colors
        light: {
          primary: '#008080',
          secondary: '#2F4858',
          accent: '#26DA8A',
          background: '#F4F6F8',
          additional: '#E0E6EB',
        },
      },
    },
  },
  plugins: [],
};
