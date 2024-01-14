import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      roboto: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
      'roboto-light': ['var(--font-roboto-light)', ...defaultTheme.fontFamily.sans],
      'roboto-medium': ['var(--font-roboto-medium)', ...defaultTheme.fontFamily.sans],
      'roboto-semibold': ['var(--font-roboto-semibold)', ...defaultTheme.fontFamily.sans],
      poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      'poppins-light': ['var(--font-poppins-light)', ...defaultTheme.fontFamily.sans],
      'poppins-medium': ['var(--font-poppins-medium)', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '',
      white: '',
      primary: {
        1: '',
      },
      secondary: {
        1: '',
      },
      gray: {
        1: '',
      },
    }),
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
};
