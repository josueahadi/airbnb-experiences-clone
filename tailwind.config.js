/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2.98px 7.46px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}

