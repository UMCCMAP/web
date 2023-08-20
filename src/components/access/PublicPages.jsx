import Homepage from '../../pages/Homepage/Homepage';
import isLogin from './isLogin';

const PublicPages = ({ Component, restricted }) => {
  return isLogin() && restricted ? <Homepage /> : <Component />;
};

export default PublicPages;
