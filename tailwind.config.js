/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B7074",
          dark: "#4A5E62",
          light: "#788C90"
        },
        secondary: {
          DEFAULT: "#C9B6A7",
          dark: "#A69182",
          light: "#DCD1C9"
        },
        accent: {
          DEFAULT: "#F4EEE8",
          dark: "#E9DFD5",
          light: "#FAF8F5"
        },
        dark: {
          DEFAULT: "#333333",
          light: "#666666"
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        dancing: ['Dancing Script', 'cursive']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};