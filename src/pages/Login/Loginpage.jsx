import { styled } from 'styled-components';
import KIcon from '../../assets/LoginIcon/kakaoIcon.png';
import NIcon from '../../assets/LoginIcon/naverIcon.png';
import Cmap from '../../assets/CMAP.png';
import { Link, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WholeDiv = styled.div`
  width: 833px;
  height: 420px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  margin-top: 240px;
`;
const Logo = styled(Link)`
  width: 183px;
  height: 47px;
  background-color: transparent;
  margin-bottom: -15px;
  border: none;
  cursor: pointer;

  img {
    width: 183px;
    height: 47px;
  }
`;
const Hr = styled.div`
  border: 0;
  width: 100%;
  align: center;
  height: 1px;
  background: #939393;
`;

const ChooseLogintext = styled.div`
  width: 262px;
  height: 24px;
  color: #939393;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.87px;
  text-align: center;
`;
const BtnCollect = styled.div`
  width: 430px;
  height: 132px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

const LoginBtn = styled.button`
  width: 191px;
  height: 132px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #f9f9f9;
  padding: 16px 32px 16px 32px;
  border-radius: 32px;
  border: none;
  gap: 12px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  text-align: center;
`;

const BtnText = styled.div`
  width: 150px;
  height: 48px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #606060;
`;
const WelcomeText = styled.div`
  width: 396px;
  height: 33px;
  margin-bottom: 20px;

  color: #939393;
  border: none;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.41px;
  text-align: center;
`;

function Loginpage() {
  const navigate = useNavigate();
  const LoginListener = () => {
    alert('로그인 되었습니다.');
    navigate('/home');
  };
  return (
    <Wrapper>
      <WholeDiv>
        <Logo to="/">
          <img src={Cmap} alt="Logo" />
        </Logo>
        <WelcomeText>CMAP에 오신 것을 환영합니다!</WelcomeText>
        <Hr></Hr>
        <ChooseLogintext>로그인 방식을 선택해 주세요</ChooseLogintext>
        <BtnCollect>
          <LoginBtn onClick={LoginListener} to="/oauth2/authorization/google">
            <Icon src={KIcon}></Icon>
            <BtnText>구글 아이디로 로그인</BtnText>
          </LoginBtn>
          <LoginBtn onClick={LoginListener}>
            <Icon src={NIcon}></Icon>
            <BtnText>네이버 아이디로 로그인</BtnText>
          </LoginBtn>
        </BtnCollect>
      </WholeDiv>
    </Wrapper>
  );
}

export default Loginpage;
