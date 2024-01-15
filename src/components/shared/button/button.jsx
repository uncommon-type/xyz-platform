import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

import styles from '../styles/button-styles';

import ButtonInner from './button-inner';

const Button = ({
  href,
  className = '',
  size = '',
  theme = '',
  label = '',
  icon = '',
  ...otherProps
}) => {
  const Tag = href ? Link : 'button';

  return (
    <Tag
      href={href}
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      {...otherProps}
    >
      <ButtonInner icon={icon} className={className} label={label} />
    </Tag>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
