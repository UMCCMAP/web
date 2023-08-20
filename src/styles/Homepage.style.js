import Bg2 from '../assets/HomepageIcon/BgImg.png';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// 배경이미지
export const HeadBg = styled.div`
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

export const TitleDiv = styled.div`
  width: 422px;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleTextIcon = styled.img`
  width: 295px;
  height: fit-content;
`;
export const TitleLogo = styled.img`
  widhth: 95px;
  height: 125px;
`;
export const HeaderBtnDiv = styled.div`
  height: 64px;
  width: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const ProfileBtn = styled(Link)`
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
export const LogoutBtn = styled.button`
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
export const ContentWholeDiv = styled.div`
  width: 870px;
  height: 1025px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: -30px;
`;
export const SearchDiv = styled.div`
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
export const SearchBtn = styled.button`
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
export const MainBtnDiv = styled.div`
  width: 866px;
  height: 428px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const GreenAndBlueBtnDiv = styled.div`
  width: 411px;
  height: 318px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ColorBtn = css`
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
export const PinkBtn = styled(Link)`
  ${ColorBtn};
  background-color: #ffd9d8;
`;
export const GreenBtn = styled(Link)`
  ${ColorBtn};
  background-color: #c8def3;
`;
export const BlueBtn = styled(Link)`
  ${ColorBtn};
  background-color: #cae5d0;
`;
export const MyCmapTextDiv = styled.div`
  width: 190px;
  height: 107px;
  flex-direction: column;
`;
export const ShareMyCmap = css`
  height: 31px;
  font-size: 35px;
  font-weight: 700;
  line-height: 31.5px;
  letter-spacing: -2%;
  display: flex;
  align-items: flex-start;
`;
export const Text1 = styled.div`
  ${ShareMyCmap};
  width: 102px;
  color: #ffffff;
  margin-bottom: 7px;
`;
export const Text2 = styled.div`
  ${ShareMyCmap};
  width: 102px;
  color: #ff5955;
`;
export const ContentCss = css`
  width: ${(props) => (props.width ? props.width : '190px')};
  height: fit-content;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  letter-spacing: -2%;
  text-align: left;
  padding: 7px 0px;
`;
export const ContentText = styled.div`
  ${ContentCss};
  color: #ffffff;
`;
export const ContentTextBoard = styled.div`
  ${ContentCss};
  color: #939393;
  text-decoration: none;
`;
export const CafeTextDiv = styled.div`
  width: 330px;
  height: 92px;
  gap: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  margin-left: 15px;
`;
export const Text3 = styled.div`
  ${ShareMyCmap};
  width: 240px;
  color: #59a76a;
`;
export const Text4 = styled.div`
  ${ShareMyCmap};
  width: 270px;
  color: #60a7e1;
`;

export const CommunityBtn = styled(Link)`
  width: 100%;
  border-radius: 32px;
  border: none;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-decoration: none;

  background-color: #f1f1f1;
  cursor: pointer;
`;
export const CommunityTextDiv = styled.div`
  width: 440px;
  height: 70px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-top: 8px;
`;
export const Text5 = styled.div`
  ${ShareMyCmap};
  width: 350px;
  color: #939393;
  text-decoration: none;
`;
export const CommunityRecommendMent = styled.div`
  width: 100%;
  height: 30px;
  gap: 24px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-decoration: none;

  img {
    width: 24px;
    height: 22px;
  }
`;
export const RecommendCommu = styled.button`
  width: 410px;
  height: 100%;
  radius: 32px;
  background-color: #f1f1f1;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
