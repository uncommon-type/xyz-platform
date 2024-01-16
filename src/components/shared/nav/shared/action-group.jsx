/* eslint-disable jsx-a11y/no-redundant-roles */
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { robotoSemibold } from 'styles/fonts/fonts';

import NavItem from './nav-items/nav-item';

const actionGroup = [
  {
    label: 'Contact Sales',
    size: 'xs',
    theme: 'plain',
    className: 'font-medium tracking-tight',
  },
  {
    label: 'Book a demo',
    size: 'sm',
    theme: 'dark-white',
    className: `${robotoSemibold.className}`,
  },
];

const ActionGroup = ({ className = '' }) => (
  <ul className={clsx('flex gap-10 text-zero', className)} role="list">
    {actionGroup.map(({ label, size, theme, className }) => (
      <NavItem
        key={label}
        size={size}
        theme={theme}
        className={className}
        aria-label={label}
        label={label}
      />
    ))}
  </ul>
);

ActionGroup.propTypes = {
  className: PropTypes.string,
};

export default ActionGroup;
