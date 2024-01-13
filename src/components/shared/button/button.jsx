import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

const styles = {
  base: '',
  size: {},
  theme: {},
};

const Button = ({ className, to, size, theme, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
