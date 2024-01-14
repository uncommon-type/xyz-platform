import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: '255 255 255',
      black: '#0e0a0f',
      primary: {
        1: '153 102 255',
        2: '203 106 251',
        3: '211 131 252',
        4: '#ca97e6',
        5: '#d49ee8',
        6: '#e6adec',
        7: '#eac8f2',
      },
      secondary: {
        1: '#f04242',
        2: '#40BFAA',
        3: '#F7E16E',
      },
      grey: {
        90: '#f5f5f5',
        94: '#f0eef1',
        98: '#faf9fa',
      },
    }),
    fontSize: {
      zero: '0',
      base: 'max(16px, 1rem)',
      sm: '0.9375rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: 'clamp(1.185rem, 1.131rem + 0.31vw, 1.50rem)',
      '2xl': 'clamp(1.86rem, 1.367rem + 2.82vw, 4.75rem)',
      '3xl': 'clamp(3.33rem, 2.447rem + 5.04vw, 8.5rem)',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      'poppins-light': ['var(--font-poppins-light)', ...defaultTheme.fontFamily.sans],
      'poppins-medium': ['var(--font-poppins-medium)', ...defaultTheme.fontFamily.sans],
      roboto: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
      'roboto-light': ['var(--font-roboto-light)', ...defaultTheme.fontFamily.sans],
      'roboto-medium': ['var(--font-roboto-medium)', ...defaultTheme.fontFamily.sans],
      'roboto-semibold': ['var(--font-roboto-semibold)', ...defaultTheme.fontFamily.sans],
    },
    letterSpacing: {
      tightest: '-0.34rem',
      tighter: '-0.095rem',
      tight: '0.01875rem',
      normal: '0',
      medium: '0.02rem',
      wide: '0.0225rem',
      wider: '0.025rem',
      widest: '0.03rem',
    },
    extend: {
      lineHeight: {
        4.5: '1.125',
      },
      spacing: {
        'space-4xs': '0.22rem',
        'space-3xs': '0.87rem',
        'space-2xs': '0.89rem',
        'space-xs': '1.125rem',
        'space-s': 'clamp(1rem, 3vmax, 2.5rem)',
        'space-md': 'clamp(2rem, 1.573rem + 2.44vw, 4.5rem)',
        'space-lg': 'clamp(3rem, 12%, 8rem)',
        'space-xl': 'clamp(3rem, 10%, 10rem)',
        'space-2xl': 'clamp(3rem, 1.74rem + 7.2vw, 10.38rem)',
        'space-mega': 'clamp(2.5rem, 10vmax, 15.25rem)',
      },
    },
    gridTemplateColumns: {
      '50-50': 'repeat(auto-fit,minmax(var(--grid-50-min-item-size),1fr))',
      thirds: 'repeat(auto-fit,minmax(var(--grid-thirds-min-item-size),1fr))',
    },
    borderRadius: {
      sm: 'var(--border-radius-sm)',
      md: 'calc(var(--border-radius-sm) + var(--space-4xs))',
      lg: '100%',
    },
    backgroundImage: {
      'light-gradient':
        'linear-gradient(to right, var(--primary-7) 0%, var(--primary-6) 32.41%, var(--primary-5) 71.97%, var(--primary-4) 100%)',
      'medium-gradient':
        'linear-gradient(133deg, rgb(var(--primary-3) / 1) 21.78%, rgb(var(--primary-2) / 1) 39.25%, rgb(var(--primary-2) / 0.2) 86.85%)',
      'dark-gradient':
        'linear-gradient(to right, rgb(var(--primary-1) / 0.1), rgb(var(--primary-1) / 0))',
    },
    animation: {
      'fade-in': 'fade-in 850ms cubic-bezier(.14,.78,.36,1)',
      'slide-in': 'slide-in 500ms cubic-bezier(.14,.78,.36,1)',
      'slide-up': 'slide-up 500ms cubic-bezier(.14,.78,.36,1)',
      'spin-slow': 'spin 1.2s linear infinite',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0 },
      },
      'slide-in': {
        '0%': { transform: 'translateX(100%)' },
      },
      'slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
  },
};
