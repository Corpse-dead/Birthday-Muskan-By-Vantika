/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          'rose': '#FF69B4',
          'blush': '#FFB6C1',
          'coral': '#FF7F7F',
          'lavender': '#E6E6FA',
          'pink': '#FFC0CB',
          'deep-rose': '#C21807',
          'gold': '#FFD700',
          'warm-white': '#FFF8DC'
        },
        pink: {
          'lightest': '#FFF5F7',
          'lighter': '#FFE1E8',
          'light': '#FFD1DC',
          'soft': '#FFC0CB',
          'medium': '#FFB3C6',
          'hot': '#FFA0B4',
          'deep': '#FF8FA3',
          'rose': '#FFB6C1',
          'blush': '#FFF0F5',
          'candy': '#FFDBE5',
          'bubblegum': '#FFC8DD'
        },
        white: {
          'pure': '#FFFFFF',
          'cream': '#FFFEF7',
          'pearl': '#F8F8FF',
          'snow': '#FFFAFA',
          'ivory': '#FFFFF0'
        }
      },
      fontFamily: {
        'romantic': ['Pacifico', 'cursive'],
        'elegant': ['Dancing Script', 'cursive'],
        'love': ['Poppins', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
