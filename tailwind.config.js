
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        display: ['Oxanium', 'cursive'],
      },
      colors: {
        bg: '#05090F',
        bg2: '#080E18',
        bg3: '#0C1422',
        cyan: '#00E5FF',
        teal: '#00B8A9',
        ice: '#C8F0FF',
        text: '#D6EDF5',
        muted: '#6A8FA3',
      }
    },
  },
  plugins: [],
}
