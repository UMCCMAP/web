import { styled } from 'styled-components';
import Logo from '../../components/logo';
import Profile from '../../assets/ProfileImg.png';
import './profile.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IntroDiv = styled.div`
  width: 815px;
  height: ${(props) => (props.height ? props.height : '200px')};
  position: absolute;
  top: ${(props) => (props.top ? props.top : '212px')};
  left: 600px;

  img {
    widtht: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '200px')};
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`;
const ProfileBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  position: absolute;
  top: 0px;
  right: ${(props) => props.right};
  background-color: #d9d9d9;

  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  align-items: center;
  cursor: pointer;
`;
const IntroText = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: #ffffff;
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  border: 1px solid #000000;

  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;
const ShareTxt = styled.div`
  width: ${(props) => (props.width ? props.width : '813px')};
  height: 40px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : '0px')};
  right: 0px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: #000000;
`;
const FavoriteCafe = styled.div`
  width: 100%;
  height: 386px;
  position: absolute;
  bottom: 0px;

  img {
    width: 466px;
    height: 386px;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`;
function EditProfile() {
  return (
    <Wrapper>
      <Logo />
      <IntroDiv id="profile">
        <img src={Profile} />
        <div
          className="name"
          style={{ border: '1px solid black', padding: '4px 10px', margin: '0px -7px' }}
        >
          닉네임
        </div>
        <ProfileBtn right="0px">수정 완료</ProfileBtn>
        <IntroText width="540px" height="158px"></IntroText>
      </IntroDiv>
      <IntroDiv id="cafe" height="440px" top="470px">
        <ShareTxt>가장 좋아하는 카페</ShareTxt>
        <FavoriteCafe>
          <img src={Profile} />
          <IntroText width="335px" height="386px"></IntroText>
        </FavoriteCafe>
      </IntroDiv>
    </Wrapper>
  );
}

export default EditProfile;
