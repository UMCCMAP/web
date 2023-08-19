import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Profile from './assets/Myprofile.png';
import CafeImg from './assets/Mycafe.png';
import './profile.css';
import * as S from '../../styles/Myprofilepage.style';
import * as W from '../../styles/Wapper.style';
// import Review from '../Review/dummy/Review';
// import Board from '../Board/dummy/Boards';
import Follower from './dummy/Follower';
import baseAxios from '../../apis/baseAxios';

function Myprofile() {
  const [userName, setUserName] = useState('딱딱한 부로리');
  const [userImg, setUserImg] = useState('./assets/Myprofile.png'); // 기본 이미지 세팅 어떻게..?
  const [userIntro, setUserIntro] = useState('소개글');
  const [cafeImg, setCafeImg] = useState('./assets/Mycafe.png');
  const [cafeTitle, setCafeTitle] = useState('땅 아래 나만의 작은 아지트');
  const [cafeContent, setCafeContent] = useState('제가 이 카페를 가장 좋아하게 된 계기는..');
  const [reviewCnt, setReviewCnt] = useState(0);
  const [boardCnt, setBoardCnt] = useState(0);
  // const [mateInfoList, setMateInfoList] = useState([]); // 에러나옴

  const UserDataFromServer = async () => {
    try {
      // 서버에서 데이터를 가져오는 로직 구현
      const response = await baseAxios.get('users/profile/nick');
      console.log(response.data);
      setUserName(response.data.userNickname);
      setUserImg(response.data.userImg);
      setUserIntro(response.data.userInfo);
      setCafeImg(response.data.cafeImg);
      setCafeTitle(response.data.userTitle);
      setCafeContent(response.data.cafeInfo);
      setReviewCnt(response.data.reviewNo);
      setBoardCnt(response.data.boardNo);
      // setMateInfoList(response.data.mateInfoList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (location.state) {
      setUserName(location.state.userNickname);
      setUserImg(location.state.userImg);
      setUserIntro(location.state.userInfo);
      setCafeImg(location.state.cafeImg);
      setCafeTitle(location.state.userTitle);
      setCafeContent(location.state.cafeInfo);
      setReviewCnt(location.state.reviewNo);
      setBoardCnt(location.state.boardNo);
    } else {
      // 서버에서 받은 데이터를 사용하도록 설정
      UserDataFromServer();
    }
  }, [location.state]);

  const [following, setFollowing] = useState(false);
  const isOwnProfile = true;

  // 팔로우 버튼 클릭 시 호출
  const handleFollowClick = () => {
    setFollowing(true); // 팔로우 상태로 변경
  };
  // 언팔로우 버튼 클릭 시 호출
  const handleUnfollowClick = () => {
    setFollowing(false); // 언팔로우 상태로 변경
  };

  const getFollowers = () => {
    return Follower;
  };

  return (
    <W.Wrapper flexDir="row">
      <Logo></Logo>
      <S.ProfileWholeDiv>
        <S.IntroDiv id="profile" margin="0 0 15px 0">
          <img src={userImg} />
          <S.UserDataDiv>
            <S.UsernameAndCountDiv>
              <S.UsernameDiv>{userName}</S.UsernameDiv>
              <S.WriteCntText>
                <S.CntBtn id="borderCnt">게시글 작성 수 {boardCnt} </S.CntBtn>
                <S.CntBtn id="reviewCnt" to="/review">
                  리뷰 작성 수 {reviewCnt}
                </S.CntBtn>
              </S.WriteCntText>
            </S.UsernameAndCountDiv>
            <S.IntroText width="540px" height="90px" top="7px">
              {userIntro}
            </S.IntroText>
            <S.ButtonsDiv>
              <S.ProfileBtn to="/profile/edit" id="edit" background="#FF6868">
                프로필 수정
              </S.ProfileBtn>
              <S.ProfileBtn id="cmap" background="#60A7E1">
                CMAP
              </S.ProfileBtn>
              {!isOwnProfile && (
                <>
                  {!following ? (
                    <S.ProfileBtn
                      id="follow"
                      background="#ffffff"
                      border="1px solid #21ae21"
                      color="#21ae21"
                      onClick={handleFollowClick}
                    >
                      팔로우 +
                    </S.ProfileBtn>
                  ) : (
                    <S.ProfileBtn
                      id="unfollow"
                      background="#21ae21"
                      color="#ffffff"
                      onClick={handleUnfollowClick}
                    >
                      언팔로우
                    </S.ProfileBtn>
                  )}
                </>
              )}
            </S.ButtonsDiv>
          </S.UserDataDiv>
        </S.IntroDiv>
        <S.FavCafeDiv>
          <S.FavCafe>
            <div style={{ color: '#60A7E1' }}>{userName}</div>
            <div>님이</div>
          </S.FavCafe>
          <S.FavCafe>가장 좋아하는 카페</S.FavCafe>
        </S.FavCafeDiv>

        <S.IntroDiv id="cafe" height="365px" margin="15px 0 0 0">
          <img src={cafeImg} width="441px" height="365px" />
          <S.IntroText width="335px" height="365px" border="none">
            <S.CafeText margin="0 0 20px 0">제목: {cafeTitle}</S.CafeText>
            <S.CafeText size="16px" weight="400">
              {cafeContent}
            </S.CafeText>
          </S.IntroText>
        </S.IntroDiv>
      </S.ProfileWholeDiv>

      <S.MateListDiv>
        <S.MateTitle>My Cafe Mates</S.MateTitle>
        <S.MateList>
          {getFollowers().map((a, i) => (
            <S.Mate key={i}>
              <img src={a.userImg} />
              <div>{a.userNickname}</div>
            </S.Mate>
          ))}
        </S.MateList>
      </S.MateListDiv>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default Myprofile;
