import { styled } from 'styled-components';
import Cmap from '../../assets/CMAP.png';
import Icon from '../../assets/LoginIcon/placeholder.png';
import { Link, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  // 공통 컴포넌트 빼야됨
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled(Link)`
  width: 183px;
  height: 47px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 220px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Hr = styled.div`
  border: 0;
  width: 58%;
  height: 1px;
  background: #939393;
  margin-top: 40px;
`;

const WelcomeText = styled.div`
  width: auto;
  height: 33px;
  margin-top: 30px;

  color: #939393;
  font-weight: 300;
  font-size: 20px;
  line-height: 33.41px;
  text-align: center;
`;
const NicknameSet = styled.div`
  width: 568px;
  height: 70px;

  border-radius: 32px;
  border: none;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
  input {
    width: 460px;
    height: 60px;
    border: none;
    border-radius: 32px;
    background-color: #f1f1f1;
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    color: #939393;
    outline: none;
  }
`;
const CompleteBtn = styled.button`
  width: 568px;
  height: 65px;
  border-radius: 32px;
  border: none;
  background-color: #ff6868;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

function RegisterPage() {
  const navigate = useNavigate();
  const sucess = () => {
    navigate('/home');
  };
  return (
    <Wrapper>
      <Logo to="/">
        <img src={Cmap} alt="Logo" />
      </Logo>
      <WelcomeText>CMAP 서비스를 이용하며 사용할 닉네임을 입력해주세요.</WelcomeText>
      <Hr></Hr>
      <NicknameSet>
        <img src={Icon} alt="Icon" />
        <input type="text" placeholder="닉네임" />
      </NicknameSet>
      <CompleteBtn onClick={sucess}>완료</CompleteBtn>
    </Wrapper>
  );
}

export default RegisterPage;
