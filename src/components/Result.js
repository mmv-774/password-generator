import refresh from '../images/refresh-btn-icon.svg';
import copy from '../images/copy-btn-icon.svg';
import Button from "./Button";
import GridContainer from './GridContainer';

const Result = () => {
  const buttons = [
    <Button icon={refresh} />,
    <Button icon={copy} />,
  ];



  return (
    <div className='result'>
      <p className='result__text'>@@@@@@@@@@@@@@@@@@@@</p>
      <GridContainer items={buttons} columns={2} gap={'5px'}/>
    </div>
  );
};

export default Result;
