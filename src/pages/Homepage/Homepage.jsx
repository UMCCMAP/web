import React from 'react';
import styled, { css } from 'styled-components';
// import Footer from '../../components/footer';
import Bg2 from '../../assets/HomepageIcon/BgImg.png';
import Redpin from '../../assets/HomepageIcon/MainLogo.png';
import Search from '../../assets/HomepageIcon/SearchLogo.png';
import Map from '../../assets/HomepageIcon/MapIcon.png';
import Recommend from '../../assets/HomepageIcon/BluestarIcon.png';
import Category from '../../assets/HomepageIcon/CommunityIcon.png';
import RedStar from '../../assets/HomepageIcon/RedstarIcon.png';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Wrap = styled.div`
  width: 100%;
  height: 1700px;
  background-color: background: #FFFFFF;
  display: flex;
  justify-content: center;
`;

const HeadBg = styled.div`
  width: 100%;
  height: 333px;
  background-image: url(${Bg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 422px;
  height: 125px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #ffffff;
  width: 295px;
  height: 119px;
  position: absolute;
  right: 0px;
  margin: 0 auto;
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  line-height: 119.34px;
`;
const TitleLogo = styled.img`
  widhth: 95px;
  height: 125px;
  position: absolute;
  left: 0px;
  margin: 0 auto;
`;
const ProfileBtn = styled.button`
  width: 105px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 224px;

  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const LogoutBtn = styled.button`
  width: 84px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 101px;

  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;
  letter-spacing: 0em;
  text-align: center;

  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const SearchDiv = styled.div`
  width: 386px;
  height: 50px;
  position: absolute;
  top: 365px;
  border-radius: 32px;
  background-color: #f1f1f1;

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
  position: absolute;
  top: 377.5px;
  margin-left: 310px;
  border: none;
  cursor: pointer;
  outline: none;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;
const ShareCss = css`
  width: 866px;
  position: absolute;
`;
const Maindiv = styled.div`
  ${ShareCss};
  height: 1025px;
  top: 447px;
  gap: 40px;
`;
const OptionDiv1 = styled.div`
  ${ShareCss};
  height: 562px;
  top: 0px;

  }
`;
const OptionDiv2 = styled.div`
  ${ShareCss};
  height: 423px;
  bottom: 0px;
`;

const ShareMainBtn = css`
  width: 411px;
  border-radius: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
`;
// MyCMAP 버튼
const MyCmapBtn = styled.button`
  ${ShareMainBtn};
  height: 318px;
  top: 0px;
  left: 0px;
  background-color: #ffd9d8;
`;
const MyCmapTextDiv = styled.div`
  width: 190px;
  height: 107px;
  gap: 3px;
  flex-direction: column;
  position: absolute;
  top: 112px;
  right: 60px;
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
const ContentText = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  color: #ffffff;
  text-align: left;
  padding: 7px 0px;
`;

//카페 둘러보기 버튼

const CafeBtn = styled(Link)`
  ${ShareMainBtn};
  text-decoration: none;
  height: 150px;
  top: 0px;
  right: 0px;
  background-color: #cae5d0;
`;
const CafeTextDiv = styled.div`
  width: 330px;
  height: 92px;
  gap: 16px;
  flex-direction: column;
  position: absolute;
  display: flex;
  justify-content: center;

  img {
    width: 68.47px;
    height: 67.92px;
    position: absolute;
    left: 0px;
  }
`;
const Text3 = styled.div`
  ${ShareMyCmap};
  width: 220px;
  color: #59a76a;
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
const RecommendCafeBtn = styled(Link)`
  ${ShareMainBtn};
  text-decoration: none;
  height: 137px;
  top: 181px;
  right: 0px;
  background-color: #c8def3;
`;
const Text4 = styled.div`
  ${ShareMyCmap};
  width: 270px;
  color: #60a7e1;
  position: absolute;
  right: -20px;
  top: 18px;
`;
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
const CommunityBtn = styled(Link)`
  width: 100%;
  border-radius: 32px;
  border: none;
  height: 130px;
  position: absolute;
  bottom: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  text-decoration: none;
  cursor: pointer;
`;
const CommunityTextDiv = styled.div`
  width: 400px;
  height: 77px;
  display: flex;
  justify-content: center;

  img {
    width: 88px;
    height: 49px;
    position: absolute;
    left: 250px;
    bottom: 40px;
  }
`;
const Text5 = styled.div`
  ${ShareMyCmap};
  width: 300px;
  color: #939393;
  position: absolute;
  right: 200px;
  top: 35px;
`;
const ContentText4 = styled.div`
  width: 300px;
  height: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  color: #939393;
  text-align: left;
  padding: 7px -1px;
  position: absolute;
  right: 200px;
  bottom: 30px;
`;
const CommunityRecommendMent = styled.div`
  width: 180px;
  height: 30px;
  gap: 24px;
  position: absolute;
  bottom: 0px;
  left: 353px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 22px;
  }
`;

const ShareRecommendCommu = css`
  width: 410px;
  height: 100%;
  radius: 32px;
  background-color: #f1f1f1;
  position: absolute;
  border-radius: 32px;
  border: none;
  cursor: pointer;
`;
const LeftRecommendCommu = styled.button`
  ${ShareRecommendCommu};
  left: 0px;
`;
const RightRecommendCommu = styled.button`
  ${ShareRecommendCommu};
  right: 0px;
`;

function Homepage() {
  return (
    <Wrap>
      <HeadBg>
        <TitleDiv>
          <TitleLogo src={Redpin} />
          <Title>CMAP</Title>
        </TitleDiv>
        <ProfileBtn>Profile</ProfileBtn>
        <LogoutBtn>Logout</LogoutBtn>
      </HeadBg>
      <SearchDiv>
        <input type="text" placeholder="카페 찾아보기"></input>
      </SearchDiv>
      <SearchBtn>
        <img src={Search} />
      </SearchBtn>
      <Maindiv>
        <OptionDiv1>
          <MyCmapBtn>
            <div className="PinkOpt">
              <img src={Redpin} className="OptinImg"></img>
              <MyCmapTextDiv>
                <Text1>MY</Text1>
                <Text2>CMAP</Text2>
                <ContentText>관심있는 카페를 핀하고 추억을 쌓아보세요!</ContentText>
              </MyCmapTextDiv>
            </div>
          </MyCmapBtn>
          <CafeBtn to="/search">
            <CafeTextDiv>
              <img src={Map}></img>
              <Text3>카페 둘러보기</Text3>
              <ContentText2>내 주변에서 내가 찾던 카페를 찾아보세요!</ContentText2>
            </CafeTextDiv>
          </CafeBtn>
          <RecommendCafeBtn to="/recommend">
            <CafeTextDiv>
              <img src={Recommend}></img>
              <Text4>CMAP 추천 카페</Text4>
              <ContentText3>CMAP에서 엄선한 추천카페</ContentText3>
            </CafeTextDiv>
          </RecommendCafeBtn>
          <CommunityBtn to="/board">
            <CommunityTextDiv>
              <img src={Category}></img>
              <Text5>CMAP 유저 게시판</Text5>
              <ContentText4>다른 사람들과 추억을 공유해 보아요!</ContentText4>
            </CommunityTextDiv>
          </CommunityBtn>
          <CommunityRecommendMent>
            <img src={RedStar} className="left"></img>
            <div className="recommend">추천해요</div>
            <img src={RedStar} className="right"></img>
          </CommunityRecommendMent>
        </OptionDiv1>
        <OptionDiv2>
          <LeftRecommendCommu></LeftRecommendCommu>
          <RightRecommendCommu></RightRecommendCommu>
        </OptionDiv2>
      </Maindiv>
      {/* <Footer></Footer> */}
    </Wrap>
  );
}
export default Homepage;
