import PropTypes from 'prop-types';

import Button from 'components/shared/button/button';
import styles from 'components/shared/styles/button-styles';

const NavItem = ({ size = '', theme = '', className = '', label = '', icon = '', ...props }) => (
  <li>
    <Button
      size={size}
      theme={theme}
      className={className}
      aria-label={label}
      label={label}
      icon={icon}
      {...props}
    />
  </li>
);

NavItem.propTypes = {
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default NavItem;
