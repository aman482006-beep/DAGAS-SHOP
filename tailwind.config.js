/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dagas: {
          50: '#FBF8F2',
          100: '#F6EFE2',
          200: '#EBDDC5',
          300: '#DCBF98',
          400: '#B88B45',
          500: '#8F6116', // Dominant Brand Gold from DAGAS logo
          600: '#7A5212',
          700: '#61400D',
          800: '#482F0A',
          900: '#322006',
          950: '#1D1203',
        },
        surface: {
          50: '#FCFBF9',
          100: '#F8F6F0',
          200: '#F0ECE1',
          300: '#E4DFD3',
          400: '#C8C2B4',
        },
        whatsapp: {
          light: '#25D366',
          DEFAULT: '#25D366',
          dark: '#128C7E',
          deep: '#075E54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      }
    },
  },
  plugins: [],
};
