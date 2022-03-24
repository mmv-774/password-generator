import Slider from './Slider';
import Checkbox from './Checkbox';
import CheckboxList from './CheckboxList';

const Options = () => {
  const checkboxes = [
    <Checkbox id={1} caption='123' />,
    <Checkbox id={2} caption='ABC' />,
    <Checkbox id={3} caption='!@#' />,
  ];

  return (
    <div className='options'>
      <Slider min={6} max={20} value={10} />
      <CheckboxList checkboxes={checkboxes} />
    </div>
  );
};

export default Options;
