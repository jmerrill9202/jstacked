/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-clash-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(64 64 64)',
            lineHeight: '1.7',
            '[class~="lead"]': {
              fontSize: '1.125rem',
              lineHeight: '1.7',
            },
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.4',
            },
            'h4, h5, h6': {
              fontWeight: '600',
              lineHeight: '1.5',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.7',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: 'rgb(14 165 233)',
              backgroundColor: 'rgb(240 249 255)',
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
            },
            code: {
              backgroundColor: 'rgb(245 245 245)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '600',
            },
            'code::before': false,
            'code::after': false,
            pre: {
              backgroundColor: 'rgb(23 23 23)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'rgb(245 245 245)',
            },
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 