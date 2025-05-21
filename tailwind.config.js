/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#dffcf7',
        'background': '#03231e',
        'primary': '#87f4df',
        'secondary': '#9c0e6b',
        'accent': '#eb3e2c',
      },
    },
  },
  plugins: [],
} 