/* eslint-disable jsx-a11y/no-redundant-roles */
import clsx from 'clsx';
import PropTypes from 'prop-types';

import NavItem from './nav-item';

const navItems = [
  {
    label: 'Integrations',
    size: 'xs',
    theme: 'plain',
    className: 'tracking-tight transition',
    href: 'example.com',
  },
  {
    label: 'Core platform',
    size: 'xs',
    theme: 'plain',
    className: 'w-full flex justify-between items-baseline gap-1 tracking-tight',
    icon: 'arrow',
  },
  {
    label: 'Company',
    size: 'xs',
    theme: 'plain',
    className: 'w-full flex justify-between items-baseline gap-1 tracking-tight',
    icon: 'arrow',
  },
  {
    label: 'Resources',
    size: 'xs',
    theme: 'plain',
    className: 'w-full flex justify-between items-baseline gap-1 tracking-tight ',
    icon: 'arrow',
  },
];

const NavItems = ({ className = '' }) => (
  <ul className={clsx('flex gap-10 text-zero', className)} role="list">
    {navItems.map(({ label, size, theme, className, icon, ...props }) => (
      <NavItem
        key={label}
        size={size}
        theme={theme}
        className={className}
        aria-label={label}
        label={label}
        icon={icon}
        {...props}
      />
    ))}
  </ul>
);

NavItems.propTypes = {
  className: PropTypes.string,
};

export default NavItems;
