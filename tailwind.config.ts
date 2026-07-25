import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FAF6EF',
          200: '#F0E6D4',
          300: '#E0D0B0',
          400: '#C8B890',
        },
        coffee: {
          50: '#F5F0E8',
          100: '#E8D5B7',
          200: '#D4B87A',
          300: '#C8963E',
          400: '#B07D2E',
          500: '#8B6320',
          600: '#6B4C3B',
          700: '#4A3526',
        },
        espresso: {
          50: '#1A1408',
          100: '#2C2416',
          200: '#3D3420',
          300: '#4A4030',
        },
        taupe: {
          100: '#C4B8A0',
          200: '#9C8E7A',
          300: '#7A6E5A',
        },
        sand: {
          100: '#D4C5A9',
          200: '#C0B090',
        },
        gold: {
          300: '#E8C56D',
          400: '#D4A853',
          500: '#C8963E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
