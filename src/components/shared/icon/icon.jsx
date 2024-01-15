import PropTypes from 'prop-types';

import ArrowIcon from 'components/shared/icon/images/ArrowIcon';
import ErrorIcon from 'components/shared/icon/images/ErrorIcon';
import MenuIcon from 'components/shared/icon/images/MenuIcon';
import SpinnerIcon from 'components/shared/icon/images/SpinnerIcon';
import TickIcon from 'components/shared/icon/images/TickIcon';

const ICON_MAP = {
  arrow: ArrowIcon,
  error: ErrorIcon,
  success: TickIcon,
  menu: MenuIcon,
  spinner: SpinnerIcon,
};

const Icon = ({ icon = '', ...props }) => {
  const IconComponent = ICON_MAP[icon];

  return <IconComponent {...props} />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
