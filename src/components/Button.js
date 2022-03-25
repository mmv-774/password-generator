import PropTypes from 'prop-types';

const Button = ({ icon }) => {
  return <button className='button' style={{ backgroundImage: `url(${icon})` }} />;
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Button;
