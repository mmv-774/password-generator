import PropTypes from 'prop-types';

const Box = ({ children, isBordered }) => {
  return <div className={`box ${isBordered && 'box_bordered'}`}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  isBordered: PropTypes.bool,
};

Box.defaultProps = {
  isBordered: true,
};

export default Box;
