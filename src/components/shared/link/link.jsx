/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import styles from '../styles/button-styles';

const Link = ({
  className = '',
  href = '',
  size = '',
  theme = '',
  ariaLabel = '',
  children,
  ...props
}) => {
  const baseClasses = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    className
  );

  if (href?.toString().startsWith('/')) {
    return (
      <NextLink className={baseClasses} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={baseClasses} href={href?.toString()} aria-label={ariaLabel} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
