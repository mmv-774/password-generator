import { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, caption }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <label htmlFor={`checkbox-${id}`} className={`checkbox-pseudo ${isActive && 'checkbox-pseudo_active'}`}>
      <input type='checkbox' id={`checkbox-${id}`} className='checkbox-pseudo__invisible' onClick={handleClick} />
      <span className='checkbox-pseudo__visible'>{caption}</span>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Checkbox;
