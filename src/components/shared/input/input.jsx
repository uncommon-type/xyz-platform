import PropTypes from 'prop-types';

const Input = ({ type = 'text', className = '', ...props }) => (
  <input type={type} {...props} className={className} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
