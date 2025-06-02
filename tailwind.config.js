/** @type {import('tailwindcss').Config} */
export default {
  // Make all utility classes available for CSS use
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Production site exact colors from Elementor CSS
        primary: {
          DEFAULT: "#282828", // --e-global-color-primary (dark gray/black)
          light: "#696969"    // --e-global-color-text (medium gray)
        },
        secondary: {
          DEFAULT: "#D5BCAE", // --e-global-color-0284caa (beige/tan border color)
          light: "#F6E9E4"    // --e-global-color-accent
        },
        teal: {
          DEFAULT: "#6D8185", // --e-global-color-675f48d (teal)
          light: "#799AA1"    // --e-global-color-489e945
        },
        brown: {
          DEFAULT: "#A66E4D", // --e-global-color-c5151c9
          light: "#C9AC78"    // --e-global-color-e8f60f4
        },
        cream: {
          DEFAULT: "#F8F0E6", // --e-global-color-8c5e278
          light: "#F9F9F9"    // --e-global-color-3babfa2
        },
        white: "#FFFFFF",     // --e-global-color-dae4b67
        dark: "#242424",      // --e-global-color-379ebdf
      },
      fontFamily: {
        // Production site fonts
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        apfel: ['ApfelGrotezk', 'sans-serif'], // Main UI font from production
        versailles: ['V E R S A I L L E S', 'serif'] // Primary heading font
      },
      fontSize: {
        // Production typography sizes
        'heading-xl': ['85px', { lineHeight: '1.2em', letterSpacing: '1.2px' }],
        'heading-lg': ['48px', { lineHeight: '1.2em', letterSpacing: '1.2px' }],
        'heading-md': ['30px', { lineHeight: '1.6em' }],
        'heading-sm': ['24px', { lineHeight: '1.2em' }],
        'body-lg': ['18px', { lineHeight: '1.8em' }],
        'body-md': ['16px', { lineHeight: '1.8em' }],
        'body-sm': ['14px', { lineHeight: '1.8em' }],
        'button': ['16px', { lineHeight: '1', letterSpacing: '0.2px' }],
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
    // Make spacing and sizing utilities available for CSS use
    ({ addUtilities }) => {
      addUtilities({
        '.w-full': { width: '100%' },
        '.px-3': { paddingLeft: '0.75rem', paddingRight: '0.75rem' },
        '.py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
        '.text-sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
        '.text-xs': { fontSize: '0.75rem', lineHeight: '1rem' },
        '.text-red-500': { color: 'rgb(239 68 68)' },
        '.text-gray-700': { color: 'rgb(55 65 81)' },
        '.mb-1': { marginBottom: '0.25rem' },
        '.mt-1': { marginTop: '0.25rem' },
        '.border': { borderWidth: '1px' },
        '.border-gray-300': { borderColor: 'rgb(209 213 219)' },
        '.rounded-md': { borderRadius: '0.375rem' },
        '.focus\:outline-none:focus': { outline: '2px solid transparent', outlineOffset: '2px' },
        '.focus\:ring-2:focus': { '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)', '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)', 'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)' },
        '.focus\:ring-primary:focus': { '--tw-ring-opacity': '1', '--tw-ring-color': 'rgb(40 40 40 / var(--tw-ring-opacity))' },
        '.focus\:border-transparent:focus': { borderColor: 'transparent' },
        '.block': { display: 'block' },
        '.font-medium': { fontWeight: '500' }
      });
    }
  ],
};