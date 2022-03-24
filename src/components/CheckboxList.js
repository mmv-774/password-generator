import PropTypes from 'prop-types';

const CheckboxList = ({ checkboxes }) => {
  return (
    <ul className='checkbox-list'>
      {checkboxes.map((checkbox, index) => (
        <li key={index}>{checkbox}</li>
      ))}
    </ul>
  );
};

CheckboxList.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CheckboxList;
