import PropTypes from 'prop-types';

const Box = ({ children, isBordered }) => {
  return <div className={`box ${isBordered && 'box_bordered'}`}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
  isBordered: PropTypes.bool,
};

export default Box;
