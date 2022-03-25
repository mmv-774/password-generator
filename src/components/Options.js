import Slider from './Slider';
import Checkbox from './Checkbox';
import GridContainer from './GridContainer';

const Options = () => {
  return (
    <div className='options'>
      <Slider min={6} max={20} value={10} />
      <GridContainer columns={3}>
        <Checkbox id={1} caption='123' />
        <Checkbox id={2} caption='ABC' />
        <Checkbox id={3} caption='!@#' />
      </GridContainer>
    </div>
  );
};

export default Options;
