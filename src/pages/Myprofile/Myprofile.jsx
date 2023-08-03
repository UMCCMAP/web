import { styled } from 'styled-components';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import Profile from '../../assets/ProfileImg.png';
import ProfileIcon from '../../assets/ProfileIcon/UserProfileIcon.png';
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
const IntroText = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #000000;

  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
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
const MateListDiv = styled.div`
  // 높이 중앙에 두고싶은데,, 이거 왼쪽기준? 오른쪽기준? 화면 크기
  width: 325px;
  height: 464px;
  position: absolute;
  top: 330px;
  right: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
const MateList = styled.div`
  width: 325px;
  height: 386px;
  position: absolute;
  bottom: 0px;
  border: 1px solid #d9d9d9;
  flex-direction: column;
`;
const Mate = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  position: absolute;
  padding: 30px;
  cursor: pointer;

  background-color: transparent;
  border: none;

  img {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 10px;
    border-radius: 50px;
    background-color: #d9d9d9;
  }
  h1 {
    font-size: 0px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
  }
`;
const WriteCntText = styled.div`
  width: auto;
  height: 19px;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: 400;
  line-height: 18.15px;
  align-items: center;
  color: #000000;
`;

function Myprofile() {
  return (
    <Wrapper>
      <Logo></Logo>
      <IntroDiv id="profile">
        <img src={Profile} />
        <div className="name">닉네임</div>
        <ProfileBtn right="0px" id="edit">
          프로필 수정
        </ProfileBtn>
        <ProfileBtn right="117px" id="follow">
          팔로우
        </ProfileBtn>
        <ProfileBtn right="234px" id="cmap">
          CMAP
        </ProfileBtn>
        <IntroText width="540px" height="158px"></IntroText>
      </IntroDiv>
      <IntroDiv id="cafe" height="440px" top="470px">
        <ShareTxt>가장 좋아하는 카페</ShareTxt>
        <FavoriteCafe>
          <img src={Profile} />
          <IntroText width="335px" height="386px"></IntroText>
        </FavoriteCafe>
      </IntroDiv>
      <MateListDiv>
        <WriteCntText>게시글 작성 수 N 리뷰 작성 수 N</WriteCntText>
        <ShareTxt width="325px" top="38px">
          My Cafe Mates
        </ShareTxt>
        <MateList>
          <Mate>
            <img src={ProfileIcon} />
            <h1>강하나</h1>
          </Mate>
        </MateList>
      </MateListDiv>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Myprofile;
