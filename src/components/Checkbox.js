import PropTypes from 'prop-types';

const Checkbox = ({ id, caption }) => {
  return (
    <label htmlFor={`checkbox-${id}`} className='checkbox-pseudo'>
      <input type='checkbox' id={`checkbox-${id}`} className='checkbox-pseudo__invisible' />
      <span className='checkbox-pseudo__visible'>{caption}</span>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Checkbox;
