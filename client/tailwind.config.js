/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1fa45b',
        'lite' : {
          100 : '#F7F8FA',
          200 : '#E8F0F5',
        }
      },
      boxShadow :{
        'top' : '0px -2.05128px 20.2564px rgba(0, 0, 0, .15)'
      },
      animation: {
        'pulse-fast': 'pulse 1s linear infinite',
      }
    },
  },
  plugins: [],
};
