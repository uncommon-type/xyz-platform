import PropTypes from 'prop-types';

import Button from 'components/shared/button/button';
import { robotoSemibold } from 'styles/fonts/fonts';

const SignupButton = ({ status = 'default' }) => {
  const states = {
    loading: {
      size: '2xs',
      theme: 'plain',
      icon: 'spinner',
      className: 'animate-spin-slow',
      ariaLabel: 'Loading',
      disabled: true,
    },
    error: {
      size: '2xs',
      theme: 'plain',
      icon: 'error',
      disabled: true,
      ariaLabel: 'Something went wrong',
    },
    success: {
      size: '2xs',
      theme: 'plain',
      icon: 'success',
      disabled: true,
      ariaLabel: 'Email successfully submitted',
    },
    default: {
      size: 'md',
      theme: 'purple',
      className: `${robotoSemibold.className}`,
      label: 'Free trial',
      ariaLabel: 'Submit email for free trial',
      icon: null,
    },
  };

  const buttonProps = states[status];

  return (
    <Button
      size={buttonProps.size}
      theme={buttonProps.theme}
      icon={buttonProps.icon}
      className={buttonProps.className}
      label={buttonProps.label}
      aria-label={buttonProps.ariaLabel}
      disabled={buttonProps.disabled}
    />
  );
};

SignupButton.propTypes = {
  status: PropTypes.string,
};

export default SignupButton;
