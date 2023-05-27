import './button.css';

import PropTypes from 'prop-types';

function Button({ children, color = 'default', size = 'base', handleClick }) {
  return (
    <button className={`${color} ${size}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'default', 'danger']),
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  onClick: PropTypes.func.isRequired,
};
