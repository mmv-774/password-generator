import PropTypes from 'prop-types';

const GridContainer = ({ children, width, gap, columns }) => {
  const style = {
    width: width,
    gap: gap,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <ul className='grid-container' style={style}>
      {children.map((child, index) => (
        <li className='grid-container-item' key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};

GridContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.string,
  gap: PropTypes.string,
  columns: PropTypes.number,
};

GridContainer.defaultProps = {
  width: '100%',
  gap: '15px',
  columns: 2,
};

export default GridContainer;
