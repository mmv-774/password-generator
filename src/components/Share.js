import telegram from '../images/telegram-share-icon.svg';
import vk from '../images/vk-share-icon.svg';
import GridContainer from './GridContainer';
import ShareLink from './ShareLink';

const Share = () => {
  return (
    <div className='share'>
      <GridContainer width='85px' gap='5px'>
        <ShareLink
          icon={telegram}
          link='https://t.me/share/url?url=https://mmv-774.github.io/password-generator/&text=Create%20a%20secure%20password'
        />
        <ShareLink icon={vk} link='https://vk.com/share.php?url=https://mmv-774.github.io/password-generator/' />
      </GridContainer>
    </div>
  );
};

export default Share;
