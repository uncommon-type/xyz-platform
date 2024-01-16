import PropTypes from 'prop-types';

const Label = ({ id = '', className = '', value = '' }) => (
  <label htmlFor={id} className={className}>
    {value}
  </label>
);

Label.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Label;
