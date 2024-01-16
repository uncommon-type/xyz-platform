import PropTypes from 'prop-types';

const Error = ({ message = '' }) => (
  <div
    aria-atomic="true"
    role="alert"
    className="signup__alert flex items-start px-[1.75rem] mt-[0.75rem] text-secondary-1 text-base tracking-medium leading-tight animate-slide-up"
  >
    <p className="alert">{message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
