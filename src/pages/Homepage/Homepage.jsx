import React from 'react';
import Footer from '../../components/footer';
import Redpin from '../../assets/HomepageIcon/MainLogo.png';
import Search from '../../assets/HomepageIcon/SearchLogo.png';
import Map from '../../assets/HomepageIcon/MapIcon.png';
import Recommend from '../../assets/HomepageIcon/BluestarIcon.png';
import Category from '../../assets/HomepageIcon/CommunityIcon.png';
import RedStar from '../../assets/HomepageIcon/RedStarIcon.png';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import * as S from '../../styles/Homepage.style';
import * as W from '../../styles/Wapper.style';

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };
  return (
    <W.LongWrapper height="1700px">
      <S.HeadBg>
        <S.HeaderBtnDiv>
          <S.ProfileBtn to="/profile">Profile</S.ProfileBtn>
          <S.LogoutBtn onClick={handleLogout}>Logout</S.LogoutBtn>
        </S.HeaderBtnDiv>
        <S.TitleDiv>
          <S.TitleLogo src={Redpin} />
          <S.Title>CMAP</S.Title>
        </S.TitleDiv>
      </S.HeadBg>
      <S.SearchDiv>
        <input type="text" placeholder="카페 찾아보기"></input>
        <S.SearchBtn>
          <img src={Search} />
        </S.SearchBtn>
      </S.SearchDiv>

      <S.ContentWholeDiv>
        <S.MainBtnDiv id="colorBtn">
          <S.PinkBtn height="318px">
            <div className="PinkOpt">
              <img src={Redpin} className="OptinImg"></img>
              <S.MyCmapTextDiv>
                <S.Text1>MY</S.Text1>
                <S.Text2>CMAP</S.Text2>
                <S.ContentText>관심있는 카페를 핀하고 추억을 쌓아보세요!</S.ContentText>
              </S.MyCmapTextDiv>
            </div>
          </S.PinkBtn>
          <S.GreenAndBlueBtnDiv>
            <S.BlueBtn to="/search" height="150px">
              <div className="GreenOpt">
                <img src={Map} className="MapAndStarImg"></img>
                <S.CafeTextDiv>
                  <S.Text3>카페 둘러보기</S.Text3>
                  <S.ContentText width="230px">
                    내 주변에서 내가 찾던 카페를 찾아보세요!
                  </S.ContentText>
                </S.CafeTextDiv>
              </div>
            </S.BlueBtn>
            <S.GreenBtn to="/recommend" height="150px">
              <div className="GreenOpt">
                <img className="MapAndStarImg" src={Recommend}></img>
                <S.CafeTextDiv>
                  <S.Text4>CMAP 추천 카페</S.Text4>
                  <S.ContentText width="230px">CMAP에서 엄선한 추천카페</S.ContentText>
                </S.CafeTextDiv>
              </div>
            </S.GreenBtn>
          </S.GreenAndBlueBtnDiv>
        </S.MainBtnDiv>

        <S.CommunityBtn to="/board">
          <div className="CommunityBtn">
            <img src={Category} className="community"></img>
            <S.CommunityTextDiv>
              <S.Text5>CMAP 유저 게시판</S.Text5>
              <S.ContentTextBoard width="330px">
                다른 사람들과 추억을 공유해 보아요!
              </S.ContentTextBoard>
            </S.CommunityTextDiv>
          </div>
        </S.CommunityBtn>

        <S.CommunityRecommendMent>
          <img src={RedStar}></img>
          <div className="recommend">추천해요</div>
          <img src={RedStar}></img>
        </S.CommunityRecommendMent>

        <S.MainBtnDiv>
          <S.RecommendCommu></S.RecommendCommu>
          <S.RecommendCommu></S.RecommendCommu>
        </S.MainBtnDiv>
      </S.ContentWholeDiv>
      <Footer></Footer>
    </W.LongWrapper>
  );
}

export default Homepage;
