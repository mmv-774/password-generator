import refresh from '../images/refresh-btn-icon.svg';
import copy from '../images/copy-btn-icon.svg';
import Button from './Button';
import GridContainer from './GridContainer';

const Result = () => {
  return (
    <div className='result'>
      <p className='result__text'>{'@@@@@@@@@@@@@@@@@@@@'}</p>
      <GridContainer columns={2} gap={'5px'}>
        <Button icon={refresh} />
        <Button icon={copy} />
      </GridContainer>
    </div>
  );
};

export default Result;
