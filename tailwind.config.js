/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'mobile': '545px',
      },
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'rgba(0, 0, 0, 0.75)', // 75% opacity for lightbox background
        },
      },
    },
  },
  plugins: [],
}

