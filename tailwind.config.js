/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Great Vibes', 'cursive'],
        parisienne: ['Parisienne', 'cursive'],
        secondary: ['Quintessential', 'serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        light: 'var(--color-light)',
      },
    },
  },
  plugins: [],
};