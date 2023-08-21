import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '@/components/footer';
import Logo from '@/components/LogoHeader';
import './profile.css';
import * as S from '@/styles/Myprofilepage.style';
import * as W from '@/styles/Wapper.style';
import baseAxios from '@/apis/baseAxios';

function Myprofile() {
  const location = useLocation();

  const myName = localStorage.getItem('nickname');
  const [data, setData] = useState();
  const [userName, setUserName] = useState(location.state ? location.state.user : myName);
  const [userImg, setUserImg] = useState('./assets/Myprofile.png'); // 기본 이미지 세팅 어떻게..?
  const [userIntro, setUserIntro] = useState('소개글');
  const [cafeImg, setCafeImg] = useState('./assets/Mycafe.png');
  const [cafeTitle, setCafeTitle] = useState('땅 아래 나만의 작은 아지트');
  const [cafeContent, setCafeContent] = useState('제가 이 카페를 가장 좋아하게 된 계기는..');
  const [reviewCnt, setReviewCnt] = useState(0);
  const [boardCnt, setBoardCnt] = useState(0);
  const [myMateInfo, setMyMateInfo] = useState([]);
  const [mateInfoList, setMateInfoList] = useState([]); // 에러나옴
  const isOwnProfile = myName === userName;
  const following = myMateInfo.includes(userName);
  const UserDataFromServer = async () => {
    try {
      // 서버에서 데이터를 가져오는 로직 구현
      const response = await baseAxios.get(`users/profile/${userName}`);
      console.log(response.data);
      setData(response.data);
      setUserName(response.data.userNickname);
      setUserImg(response.data.userImg);
      setUserIntro(response.data.userInfo);
      setCafeImg(response.data.cafeImg);
      setCafeTitle(response.data.cafeTitle);
      setCafeContent(response.data.cafeInfo);
      setReviewCnt(response.data.reviewNo);
      setBoardCnt(response.data.boardNo);
      setMateInfoList(response.data.matesInfoList);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const MateFromServer = async () => {
    try {
      // 서버에서 데이터를 가져오는 로직 구현
      const response = await baseAxios.get(`users/profile/${myName}`);

      setMyMateInfo(response.data.matesInfoList.map((item) => item.user.nickname));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    UserDataFromServer();
    console.log(userName);
  }, [userName]);

  // 팔로우 버튼 클릭 시 호출
  const handleFollowClick = async (userNickname, follow) => {
    try {
      const response = await baseAxios.put(`/users/profile/${userNickname}`, {
        checkFollow: follow,
      });
      console.log('Follow request successful', response.data);
      // 여기서 필요한 처리를 수행하세요.
      MateFromServer();
    } catch (error) {
      console.error('Error sending follow request', error);
      // 에러 처리
    }
  };

  useEffect(() => {
    MateFromServer();
    console.log(mateInfoList);
  }, []);

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
                <S.CntBtn to="/board" state={{ writer: userName }} id="borderCnt">
                  게시글 작성 수 {boardCnt}{' '}
                </S.CntBtn>
                <S.CntBtn id="reviewCnt" to="/review">
                  리뷰 작성 수 {reviewCnt}
                </S.CntBtn>
              </S.WriteCntText>
            </S.UsernameAndCountDiv>
            <S.IntroText width="540px" height="90px" top="7px">
              {userIntro}
            </S.IntroText>
            <S.ButtonsDiv>
              {isOwnProfile ? (
                <S.ProfileBtn
                  to="/profile/edit"
                  state={{ data: data }}
                  id="edit"
                  background="#FF6868"
                >
                  프로필 수정
                </S.ProfileBtn>
              ) : (
                <S.ProfileBtn
                  onClick={() => {
                    setUserName(myName);
                  }}
                  id="edit"
                  background="#FF6868"
                >
                  내 프로필보기
                </S.ProfileBtn>
              )}
              <S.ProfileBtn
                to={'/cmap'}
                state={{ userName: userName }}
                id="cmap"
                background="#60A7E1"
              >
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
                      onClick={() => {
                        handleFollowClick(userName, 'follow');
                      }}
                    >
                      팔로우 +
                    </S.ProfileBtn>
                  ) : (
                    <S.ProfileBtn
                      id="unfollow"
                      background="#21ae21"
                      color="#ffffff"
                      onClick={() => {
                        handleFollowClick(userName, 'unfollow');
                      }}
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
        <S.MateTitle>Cafe Mates</S.MateTitle>
        <S.MateList>
          {mateInfoList?.map((a, i) => (
            <S.Mate
              key={i}
              onClick={() => {
                setUserName(a.user.nickname);
              }}
            >
              <img src={a.userImg} />
              <div>{a.user.nickname}</div>
            </S.Mate>
          ))}
        </S.MateList>
      </S.MateListDiv>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default Myprofile;
