import PropTypes from 'prop-types';

import ActionGroup from '../shared/action-group';
import NavItems from '../shared/nav-items/nav-items';

import Drawer from './drawer';

const MobileMenu = ({ onClick }) => (
  <Drawer onDismiss={onClick}>
    <NavItems className="flex flex-col" />
    <ActionGroup className="flex flex-col" />
  </Drawer>
);

export default MobileMenu;

MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
