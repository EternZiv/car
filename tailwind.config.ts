/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#081324',
        secondary: '#0E2347',
        accent: '#2F67FF',
        background: '#FFFFFF',
        border: '#E5E7EB',
        text: '#111827',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'card-sm': '12px',
        'btn': '10px',
        'pill': '9999px',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(8, 19, 36, 0.15)',
        'premium-lg': '0 35px 60px -15px rgba(8, 19, 36, 0.2)',
        'premium-xl': '0 50px 100px -20px rgba(8, 19, 36, 0.25)',
        'soft': '0 10px 30px -10px rgba(8, 19, 36, 0.08)',
        'hover': '0 20px 40px -12px rgba(8, 19, 36, 0.18)',
        'glow': '0 0 40px rgba(47, 103, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(47, 103, 255, 0.2)',
        'glass': '0 8px 32px rgba(8, 19, 36, 0.08)',
        'card': '0 2px 4px rgba(8, 19, 36, 0.02), 0 8px 24px rgba(8, 19, 36, 0.06)',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1320px',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'blur-in': 'blurIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}