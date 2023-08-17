import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Profile from './assets/Myprofile.png';
import CafeImg from './assets/Mycafe.png';
import './profile.css';
import * as S from '../../styles/Myprofilepage.style';
import * as W from '../../styles/Wapper.style';
import Review from '../Review/dummy/Review';
import Board from '../Board/dummy/Boards';
import Follower from './dummy/Follower';

function Myprofile() {
  const borderCnt = Board.length;
  const reviewCnt = Review.length;

  const [userName, setUserName] = useState('딱딱한 부로리');
  const [userIntro, setUserIntro] = useState('소개글');
  const favCafeTitle = '땅 아래 나만의 작은 아지트';
  const favCafeContent = '제가 이 카페를 가장 좋아하게 된 계기는..';

  // useEffect(() => {
  //   if (location.state) {
  //     setUserName(location.state.userNickname);
  //     setUserIntro(location.state.userInfo);
  //   } else {
  //     // 서버에서 받은 데이터를 사용하도록 설정
  //     fetchUserDataFromServer(); // 예시 함수 이름, 서버에서 데이터를 가져오는 로직을 여기에 구현
  //   }
  // }, [location.state]);

  // const fetchUserDataFromServer = async () => {
  //   try {
  //     // 서버에서 데이터를 가져오는 로직 구현
  //     const response = await fetch('http://localhost:8080/users/profile/:userNickname');
  //     const data = await response.json();

  //     // 받은 데이터를 userName과 userIntro에 적용
  //     setUserName(data.userNickname);
  //     setUserIntro(data.userInfo);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
          <img src={Profile} />
          <S.UserDataDiv>
            <S.UsernameAndCountDiv>
              <S.UsernameDiv>{userName}</S.UsernameDiv>
              <S.WriteCntText>
                <S.CntBtn id="borderCnt">게시글 작성 수 {borderCnt} </S.CntBtn>
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
          <S.FavCafe>{userName}님이</S.FavCafe>
          <S.FavCafe>가장 좋아하는 카페</S.FavCafe>
        </S.FavCafeDiv>

        <S.IntroDiv id="cafe" height="365px" margin="15px 0 0 0">
          <img src={CafeImg} width="441px" height="365px" />
          <S.IntroText width="335px" height="365px" border="none">
            <S.CafeText margin="0 0 20px 0">제목: {favCafeTitle}</S.CafeText>
            <S.CafeText size="16px" weight="400">
              {favCafeContent}
            </S.CafeText>
          </S.IntroText>
        </S.IntroDiv>
      </S.ProfileWholeDiv>

      <S.MateListDiv>
        <S.MateTitle>My Cafe Mates</S.MateTitle>
        <S.MateList>
          {getFollowers().map((a, i) => (
            <S.Mate key={i}>
              <img src={a.followerImg} />
              <div>{a.followername}</div>
            </S.Mate>
          ))}
        </S.MateList>
      </S.MateListDiv>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default Myprofile;
