/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlack: '#0B0B0B',
        brandGold: '#D4AF37',
        brandGoldDark: '#C5A028',
        brandOffWhite: '#F5F5F5',
        brandGray: '#9E9E9E'
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
