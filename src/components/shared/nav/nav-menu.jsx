import PropTypes from 'prop-types';

import Button from 'components/shared/button/button';
import MobileMenu from 'components/shared/nav/mobile-menu';

import ActionGroup from './shared/action-group';
import NavItems from './shared/nav-items/nav-items';

const NavMenu = ({ onClick, isMenuOpen }) => (
  <nav
    role="navigation"
    aria-label="Main menu"
    className="flex flex-col gap-10 md:justify-around lg:flex-row lg:justify-start lg:items-center lg:py-space-3xs xl:justify-end xl:gap-space-mega"
  >
    <Button
      aria-expanded={isMenuOpen}
      className="grid place-items-center self-start m-0 py-space-s bg-transparent border-none cursor-pointer transition-transform duration-200 hover:scale-110 lg:hidden"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      icon="menu"
      onClick={onClick}
    />
    {isMenuOpen && <MobileMenu onClick={onClick} />}
    <NavItems className="hidden lg:flex lg:flex-row lg:items-center" />
    <ActionGroup className="hidden lg:flex lg:flex-row lg:items-center" />
  </nav>
);

NavMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavMenu;
