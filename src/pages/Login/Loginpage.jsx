import GIcon from '../../assets/LoginIcon/googleIcon.png';
import NIcon from '../../assets/LoginIcon/naverIcon.png';
import Cmap from '../../assets/CMAP.png';
import { useNavigate } from 'react-router-dom';
import * as L from './style/Login.style';
import * as W from '../../styles/Wapper.style';
import * as S from '../../styles/Loginpage.style';

function Loginpage() {
  const navigate = useNavigate();
  const LoginListener = () => {
    alert('로그인 되었습니다.');
    navigate('/home');
  };
  return (
    <W.Wrapper>
      <L.WholeDiv>
        <L.Logo to="/">
          <img src={Cmap} alt="Logo" />
        </L.Logo>
        <S.WelcomeText>CMAP에 오신 것을 환영합니다!</S.WelcomeText>
        <L.Hr></L.Hr>
        <S.ChooseLogintext>로그인 방식을 선택해 주세요</S.ChooseLogintext>
        <S.BtnCollect>
          <S.LoginBtn onClick={LoginListener} to="/oauth2/authorization/google">
            <S.Icon src={GIcon}></S.Icon>
            <S.BtnText>구글 아이디로 로그인</S.BtnText>
          </S.LoginBtn>
          <S.LoginBtn onClick={LoginListener}>
            <S.Icon src={NIcon}></S.Icon>
            <S.BtnText>네이버 아이디로 로그인</S.BtnText>
          </S.LoginBtn>
        </S.BtnCollect>
      </L.WholeDiv>
    </W.Wrapper>
  );
}

export default Loginpage;
