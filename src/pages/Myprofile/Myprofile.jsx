import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Profile from '../../assets/ProfileImg.png';
import ProfileIcon from '../../assets/ProfileIcon/UserProfileIcon.png';
import './profile.css';
import * as S from '../../styles/Myprofilepage.style';
import * as W from '../../styles/Wapper.style';
import Review from '../Review/dummy/Review';
import Board from '../Board/dummy/Boards';

function Myprofile() {
  const borderCnt = Board.length;
  const reviewCnt = Review.length;
  // const [name, setName] = useState('user');
  return (
    <W.Wrapper flexDir="row">
      <Logo></Logo>
      <S.ProfileWholeDiv>
        <S.IntroDiv id="profile">
          <img src={Profile} />
          <S.UserDataDiv>
            <S.ButtonsDiv>
              <div className="name" style={{ top: '0px' }}>
                닉네임
              </div>
              <S.ProfileBtn id="cmap">CMAP</S.ProfileBtn>
              <S.ProfileBtn id="follow">팔로우</S.ProfileBtn>
              <S.ProfileBtn to="/profile/edit" id="edit">
                프로필 수정
              </S.ProfileBtn>
            </S.ButtonsDiv>
            <S.IntroText width="540px" height="158px"></S.IntroText>
          </S.UserDataDiv>
        </S.IntroDiv>
        <S.ShareTxt>가장 좋아하는 카페</S.ShareTxt>

        <S.IntroDiv id="cafe" height="440px">
          <img src={Profile} />
          <S.IntroText width="335px" height="386px"></S.IntroText>
        </S.IntroDiv>
      </S.ProfileWholeDiv>

      <S.MateListDiv>
        <S.WriteCntText>
          <S.CntBtn id="borderCnt">게시글 작성 수 {borderCnt} </S.CntBtn>
          <S.CntBtn id="reviewCnt" to="/review">
            리뷰 작성 수 {reviewCnt}
          </S.CntBtn>
        </S.WriteCntText>
        <S.ShareTxt width="325px">My Cafe Mates</S.ShareTxt>
        <S.MateList>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>김ㅁㅁ</div>
          </S.Mate>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>이ㅇㅇ</div>
          </S.Mate>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>송XX</div>
          </S.Mate>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>김ㅁㅁ</div>
          </S.Mate>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>김ㅁㅁ</div>
          </S.Mate>
          <S.Mate>
            <img src={ProfileIcon} />
            <div>김ㅁㅁ</div>
          </S.Mate>
        </S.MateList>
      </S.MateListDiv>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default Myprofile;
