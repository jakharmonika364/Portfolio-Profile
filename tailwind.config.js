/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#FAFAFA',
          alt: '#F3F3F0',
        },
        text: {
          primary: '#111110',
          secondary: '#5C5C57',
          muted: '#9B9B95',
        },
        accent: {
          DEFAULT: '#5B4FE9',
          pale: '#EEF0FF',
          mid: '#C5C1FF',
        },
        border: '#E4E4DF',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'count-up': 'countUp 1.8s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(91,79,233,0.15)',
        'nav': '0 1px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
