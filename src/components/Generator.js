import PropTypes from 'prop-types';

const Generator = ({ children }) => {
  return <div className='generator'>{children}</div>;
};

Generator.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Generator;
