import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className='layout horizontal-aligned-block'>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
