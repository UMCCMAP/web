import { styled } from 'styled-components';
import KIcon from '../assets/LoginIcon/kakaoIcon.png';
import NIcon from '../assets/LoginIcon/naverIcon.png';
import Login from '../components/Login';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Hr = styled.div`
  border: 0;
  width: 58%;
  position: absolute;
  top: 47.7%;
  align: center;
  height: 1px;
  background: #939393;
`;
const ChooseLogintext = styled.div`
  width: 262px;
  height: 24px;
  position: absolute;
  top: 50%;
  color: #939393;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.87px;
  text-align: center;
`;
const BtnCollect = styled.div`
  width: 430px;
  height: 132px;
  position: absolute;
  top: 550px;
  gap: 48px;
`;

const KakaoLoginBtn = styled.button`
  width: 191px;
  height: 132px;
  position: absolute;
  left: 0px;

  background-color: #f9f9f9;
  padding: 16px 32px 16px 32px;
  border-radius: 32px;
  border: none;
  gap: 12px;
  cursor: pointer;
`;
const NaverLoginBtn = styled.button`
  width: 191px;
  height: 132px;
  position: absolute;
  right: 0px;

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
  position: relative;
  bottom: 5px;
  text-align: center;
`;

const BtnText = styled.div`
  width: 150px;
  height: 48px;
  position: relative;
  top: 5px;
  right: 9px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #606060;
`;

function Loginpage() {
  return (
    <Wrapper>
      <Login></Login>
      <Hr></Hr>
      <ChooseLogintext>로그인 방식을 선택해 주세요</ChooseLogintext>
      <BtnCollect>
        <KakaoLoginBtn>
          <Icon src={KIcon}></Icon>
          <BtnText>구글 아이디로 로그인</BtnText>
        </KakaoLoginBtn>
        <NaverLoginBtn>
          <Icon src={NIcon}></Icon>
          <BtnText>네이버 아이디로 로그인</BtnText>
        </NaverLoginBtn>
      </BtnCollect>
    </Wrapper>
  );
}

export default Loginpage;
