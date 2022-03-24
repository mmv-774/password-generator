import PropTypes from 'prop-types';
import { useState } from 'react';

const Slider = ({ min, max, value, caption }) => {
  const [length, setLength] = useState(value >= min && value <= max ? value : min);
  const [progress, setProgress] = useState(`${((length - min) * 100) / (max - min)}% 100%`);

  const handleChangeRange = (e) => {
    setLength(e.target.value);
    setProgress(((e.target.value - min) * 100) / (max - min) + '% 100%');
  };

  return (
    <div className='slider'>
      <div className='slider__labels-container'>
        <label htmlFor='slider-input' className='slider__label'>
          {caption}
        </label>
        <label htmlFor='slider-input' className='slider__label'>
          {length}
        </label>
      </div>
      <input
        type='range'
        min={min}
        max={max}
        id='slider-input'
        className='slider__input'
        style={{ backgroundSize: progress }}
        onChange={handleChangeRange}
        value={length}
      />
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  caption: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  caption: 'LENGTH',
};

export default Slider;
