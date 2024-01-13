import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['', ...defaultTheme.fontFamily.sans],
      mono: ['', ...defaultTheme.fontFamily.mono],
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
