/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-pt-serif)', 'PT Serif', 'serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
          grey: '#9ca3af'
        },
        background: {
          light: '#ffffff',
          dark: '#ffffff'
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6'
        },
        accent: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399'
        },
        quirky: {
          purple: '#9333ea',
          pink: '#ec4899',
          yellow: '#fbbf24',
          blue: '#06b6d4',
          green: '#10b981'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite'
      }
    }
  },
  plugins: [],
};
