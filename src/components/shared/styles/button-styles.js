const styles = {
  transition: 'transition-colors duration-200',
  base: 'rounded-sm leading-none transition',
  size: {
    '2xs': 'text-zero',
    xs: 'text-sm',
    sm: 'lg:py-2.5 lg:px-space-xs text-sm',
    md: 'min-w-[min(40%,10.5rem)] text-base',
  },
  theme: {
    purple: 'text-black bg-[rgb(var(--primary-1)/1)] hover:bg-[rgb(var(--white)/1)]',
    'dark-white':
      'text-grey-98/90 lg:text-black lg:bg-grey-98 lg:hover:bg-[rgb(var(--primary-1)/1)]',
    plain: 'text-grey-98/90 hover:text-[rgb(var(--primary-1)/1)]',
  },
};

export default styles;
