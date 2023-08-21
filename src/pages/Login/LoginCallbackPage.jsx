import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseAxios from '@/apis/baseAxios';

function LoginCallbackPage() {
  const navigate = useNavigate();
  const url = window.location.href;
  const searchParams = new URL(url).searchParams;

  const token = searchParams.get('Authorization');
  const refresh = searchParams.get('RefreshToken');

  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refresh);

  const login = async () => {
    try {
      const response = await baseAxios.get('users/login');
      if (response.data === 'redirect:/') {
        alert('로그인 실패하셨습니다.');
        navigate('/login');
      } else if (response.data === 'redirect:/users/nickname') {
        navigate('/register');
      } else {
        localStorage.setItem('nickname', response.data);
        navigate('/home');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return null;
}

export default LoginCallbackPage;
