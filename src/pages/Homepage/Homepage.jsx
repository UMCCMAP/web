import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/footer';
import Bg2 from '../../assets/HomepageIcon/BgImg.png';
import Redpin from '../../assets/HomepageIcon/MainLogo.png';
import Search from '../../assets/HomepageIcon/SearchLogo.png';
import Map from '../../assets/HomepageIcon/MapIcon.png';
import Recommend from '../../assets/HomepageIcon/BluestarIcon.png';
import Category from '../../assets/HomepageIcon/CommunityIcon.png';
import RedStar from '../../assets/HomepageIcon/RedStarIcon.png';
<<<<<<< Updated upstream
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes
import './Homepage.css';

const Wrapping = styled.div`
  width: 100%;
  height: 1700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 배경이미지
const HeadBg = styled.div`
  width: 100%;
  height: 333px;
  background-image: url(${Bg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 422px;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  color: #ffffff;
  width: 295px;
  height: 119px;
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  line-height: 119.34px;
`;
const TitleLogo = styled.img`
  widhth: 95px;
  height: 125px;
`;
const HeaderBtnDiv = styled.div`
  height: 64px;
  width: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const ProfileBtn = styled(Link)`
  width: 105px;
  height: 24px;

  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: none;

  margin-right: 20px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const LogoutBtn = styled.button`
  width: 105px;
  height: 24px;
  text-decoration: none;

  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;
  letter-spacing: 0em;
  text-align: center;
  margin-right: 300px;

  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
//콘텐츠
const ContentWholeDiv = styled.div`
  width: 870px;
  height: 1025px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: -30px;
`;
const SearchDiv = styled.div`
  width: 386px;
  height: 50px;
  border-radius: 32px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  margin-top: 60px;

  input {
    width: 315px;
    height: 100%;
    background-color: #ffffff;
    margin-left: 20px;
    background-color: transparent;
    border: none;
    outline: none;

    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  outline: none;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

// 콘텐츠 나누기
const MainBtnDiv = styled.div`
  width: 866px;
  height: 428px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const GreenAndBlueBtnDiv = styled.div`
  width: 411px;
  height: 318px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ColorBtn = css`
  width: 411px;
  height: ${(props) => props.height};
  border-radius: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
const PinkBtn = styled(Link)`
  ${ColorBtn};
  background-color: #ffd9d8;
`;
const GreenBtn = styled(Link)`
  ${ColorBtn};
  background-color: #c8def3;
`;
const BlueBtn = styled(Link)`
  ${ColorBtn};
  background-color: #cae5d0;
`;
const MyCmapTextDiv = styled.div`
  width: 190px;
  height: 107px;
  flex-direction: column;
`;
const ShareMyCmap = css`
  height: 31px;
  font-size: 35px;
  font-weight: 700;
  line-height: 31.5px;
  letter-spacing: -2%;
  display: flex;
  align-items: flex-start;
`;
const Text1 = styled.div`
  ${ShareMyCmap};
  width: 102px;
  color: #ffffff;
  margin-bottom: 7px;
`;
const Text2 = styled.div`
  ${ShareMyCmap};
  width: 102px;
  color: #ff5955;
`;
const ContentCss = css`
  width: ${(props) => (props.width ? props.width : '190px')};
  height: fit-content;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  text-align: left;
  padding: 7px 0px;
`;
<<<<<<< Updated upstream

//카페 둘러보기 버튼

const CafeBtn = styled.button`
  ${ShareMainBtn};
  height: 150px;
  top: 0px;
  right: 0px;
  background-color: #cae5d0;
=======
const ContentText = styled.div`
  ${ContentCss};
  color: #ffffff;
`;
const ContentTextBoard = styled.div`
  ${ContentCss};
  color: #939393;
>>>>>>> Stashed changes
`;
const CafeTextDiv = styled.div`
  width: 330px;
  height: 92px;
  gap: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  margin-left: 15px;
`;
const Text3 = styled.div`
  ${ShareMyCmap};
  width: 240px;
  color: #59a76a;
<<<<<<< Updated upstream
  position: absolute;
  right: 20px;
  top: 5px;
`;
const ContentText2 = styled.div`
  width: 230px;
  height: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  color: #ffffff;
  text-align: left;
  padding: 7px -1px;
  position: absolute;
  right: 10px;
  bottom: 0px;
`;
// 추천카페
const RecommendCafeBtn = styled.button`
  ${ShareMainBtn};
  height: 137px;
  top: 181px;
  right: 0px;
  background-color: #c8def3;
=======
>>>>>>> Stashed changes
`;
const Text4 = styled.div`
  ${ShareMyCmap};
  width: 270px;
  color: #60a7e1;
`;
<<<<<<< Updated upstream
const ContentText3 = styled.div`
  width: 230px;
  height: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  color: #ffffff;
  text-align: left;
  padding: 7px -1px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
//게시판
const CommunityBtn = styled.button`
=======

const CommunityBtn = styled(Link)`
>>>>>>> Stashed changes
  width: 100%;
  border-radius: 32px;
  border: none;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  background-color: #f1f1f1;
  cursor: pointer;
`;
const CommunityTextDiv = styled.div`
  width: 440px;
  height: 70px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-top: 8px;
`;
const Text5 = styled.div`
  ${ShareMyCmap};
  width: 350px;
  color: #939393;
`;
const CommunityRecommendMent = styled.div`
  width: 100%;
  height: 30px;
  gap: 24px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  img {
    width: 24px;
    height: 22px;
  }
`;
const RecommendCommu = styled.button`
  width: 410px;
  height: 100%;
  radius: 32px;
  background-color: #f1f1f1;
  border-radius: 32px;
  border: none;
  cursor: pointer;
`;

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };
  return (
    <Wrapping height="1700px">
      <HeadBg>
        <HeaderBtnDiv>
          <ProfileBtn to="/profile">Profile</ProfileBtn>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </HeaderBtnDiv>
        <TitleDiv>
          <TitleLogo src={Redpin} />
          <Title>CMAP</Title>
        </TitleDiv>
      </HeadBg>
      <SearchDiv>
        <input type="text" placeholder="카페 찾아보기"></input>
        <SearchBtn>
          <img src={Search} />
        </SearchBtn>
      </SearchDiv>

      <ContentWholeDiv>
        <MainBtnDiv id="colorBtn">
          <PinkBtn height="318px">
            <div className="PinkOpt">
              <img src={Redpin} className="OptinImg"></img>
              <MyCmapTextDiv>
                <Text1>MY</Text1>
                <Text2>CMAP</Text2>
                <ContentText>관심있는 카페를 핀하고 추억을 쌓아보세요!</ContentText>
              </MyCmapTextDiv>
            </div>
<<<<<<< Updated upstream
          </MyCmapBtn>
          <CafeBtn>
            <CafeTextDiv>
              <img src={Map}></img>
              <Text3>카페 둘러보기</Text3>
              <ContentText2>내 주변에서 내가 찾던 카페를 찾아보세요!</ContentText2>
            </CafeTextDiv>
          </CafeBtn>
          <RecommendCafeBtn>
            <CafeTextDiv>
              <img src={Recommend}></img>
              <Text4>CMAP 추천 카페</Text4>
              <ContentText3>CMAP에서 엄선한 추천카페</ContentText3>
            </CafeTextDiv>
          </RecommendCafeBtn>
          <CommunityBtn>
=======
          </PinkBtn>
          <GreenAndBlueBtnDiv>
            <BlueBtn to="/search" height="150px">
              <div className="GreenOpt">
                <img src={Map} className="MapAndStarImg"></img>
                <CafeTextDiv>
                  <Text3>카페 둘러보기</Text3>
                  <ContentText width="230px">내 주변에서 내가 찾던 카페를 찾아보세요!</ContentText>
                </CafeTextDiv>
              </div>
            </BlueBtn>
            <GreenBtn to="/recommend" height="150px">
              <div className="GreenOpt">
                <img className="MapAndStarImg" src={Recommend}></img>
                <CafeTextDiv>
                  <Text4>CMAP 추천 카페</Text4>
                  <ContentText width="230px">CMAP에서 엄선한 추천카페</ContentText>
                </CafeTextDiv>
              </div>
            </GreenBtn>
          </GreenAndBlueBtnDiv>
        </MainBtnDiv>

        <CommunityBtn to="/board">
          <div className="CommunityBtn">
            <img src={Category} className="community"></img>
>>>>>>> Stashed changes
            <CommunityTextDiv>
              <Text5>CMAP 유저 게시판</Text5>
              <ContentTextBoard width="330px">다른 사람들과 추억을 공유해 보아요!</ContentTextBoard>
            </CommunityTextDiv>
          </div>
        </CommunityBtn>

        <CommunityRecommendMent>
          <img src={RedStar}></img>
          <div className="recommend">추천해요</div>
          <img src={RedStar}></img>
        </CommunityRecommendMent>

        <MainBtnDiv>
          <RecommendCommu></RecommendCommu>
          <RecommendCommu></RecommendCommu>
        </MainBtnDiv>
      </ContentWholeDiv>
      <Footer></Footer>
    </Wrapping>
  );
}

export default Homepage;
