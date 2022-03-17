const Result = () => {
  return (
    <div className='result'>
      <p className='result__text'>PASSWORD</p>
      <ul className='result__buttons-container'>
        <li className='result__buttons-container-item'>
          <button className='result__button result__button_action_refresh' />
        </li>
        <li className='result__buttons-container-item'>
          <button className='result__button result__button_action_copy' />
        </li>
      </ul>
    </div>
  );
};

export default Result;
