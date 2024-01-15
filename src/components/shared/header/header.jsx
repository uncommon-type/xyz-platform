'use client';

import useToggle from 'hooks/useToggle';

import NavMenu from '../nav/nav-menu';

const Header = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <header>
      <NavMenu isMenuOpen={isMenuOpen} onClick={toggleIsMenuOpen} />
    </header>
  );
};

export default Header;
