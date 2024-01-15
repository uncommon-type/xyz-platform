import PropTypes from 'prop-types';

import Icon from '../icon/icon';

const ButtonInner = ({ icon = '', label = '' }) =>
  icon ? (
    <>
      {label}
      <Icon icon={icon} aria-hidden="true" focusable="false" />
    </>
  ) : (
    label
  );

ButtonInner.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default ButtonInner;
