import PropTypes from 'prop-types';

const Checkbox = ({ name, caption }) => {
  return (
    <label htmlFor={`checkbox-${name}`} class='checkbox-pseudo'>
      <input type='checkbox' id={`checkbox-${name}`} class='checkbox-pseudo__invisible' />
      <span class='checkbox-pseudo__visible'>{caption}</span>
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Checkbox;
