import Cmap from '../../assets/CMAP.png';
import Icon from '../../assets/LoginIcon/placeholder.png';
import { useNavigate } from 'react-router-dom';
import * as L from './style/Login.style';
import * as S from '../../styles/Registerpage.style';
import * as W from '../../styles/Wapper.style';

function RegisterPage() {
  const navigate = useNavigate();
  const sucess = () => {
    navigate('/home');
  };
  return (
    <W.Wrapper>
      <L.Logo to="/">
        <img src={Cmap} alt="Logo" />
      </L.Logo>
      <S.WelcomeText>CMAP 서비스를 이용하며 사용할 닉네임을 입력해주세요.</S.WelcomeText>
      <L.Hr></L.Hr>
      <S.NicknameSet>
        <img src={Icon} alt="Icon" />
        <input type="text" placeholder="닉네임" />
      </S.NicknameSet>
      <S.CompleteBtn onClick={sucess}>완료</S.CompleteBtn>
    </W.Wrapper>
  );
}

export default RegisterPage;
