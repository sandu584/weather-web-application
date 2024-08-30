/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/10': '15%',
        '9/10': '85%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

