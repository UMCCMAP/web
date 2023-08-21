import Loginpage from '@/pages/Login/Loginpage';
import isLogin from './isLogin';

const PrivatePages = ({ Component }) => {
  return isLogin() ? <Component /> : <Loginpage />;
};

export default PrivatePages;
