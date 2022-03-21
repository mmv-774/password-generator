import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className='layout horizontal-aligned-block'>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
