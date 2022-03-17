import Checkbox from './Checkbox';
import Slider from './Slider';

const Options = () => {
  return (
    <div className='options'>
      <Slider minValue={6} maxValue={20} defaultValue={10} />
      <div className='options__checkboxes-container'>
        <Checkbox name='numbers' caption='123' />
        <Checkbox name='letters' caption='ABC' />
        <Checkbox name='characters' caption='!@#' />
      </div>
    </div>
  );
};

export default Options;
