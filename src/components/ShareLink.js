import PropTypes from 'prop-types';

const ShareLink = ({ link, icon }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='share-link'>
      <img src={icon} alt='Share' className='share-link__icon' />
    </a>
  );
};

ShareLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ShareLink;
