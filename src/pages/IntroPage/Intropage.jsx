import React from 'react';
import { styled, css } from 'styled-components';
import Bg from '../../assets/IntroIcon/cafeimg.png';
import Icon from '../../assets/CMAP.png';
import Examimg from '../../assets/IntroIcon/ex5.png';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';

const Wrapping = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const Bgimg = styled.div`
  width: 100%;
  height: 843px;
  background: url(${Bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
const BgContentDiv = styled.div`
  width: 1000px;
  height: 338px;
  flex-direction: column;
  justify-content: left;
  margin-left: 100px;
`;
const Logo = styled.img`
  width: 116px;
  height: auto;
  top: 40px;
  left: 100px;
  position: absolute;
`;

const Titletext = styled.div`
  height: 76px;
  max-width: 1000px;
  font-size: 64px;
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: 76.38px;
  color: white;
`;

// 글씨 너비 어떻게 할지
const SubTitletext = styled.div`
  width: 360px;
  height: 66px;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.41px;
  margin-top: 15px;
  color: white;
`;
const LoginBtn = styled.button`
  width: 150px;
  height: 44px;

  margin-top: 60px;
  border-radius: 32px;
  color: #939393;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
const CafeIntroWholeDiv = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
`;
const IntroDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Mainimg1 = styled.img`
  width: 80%;
  height: 781px;
  display: flex;
  position: relative;
  z-index: 1;
`;
const Mainimg2 = styled.img`
  width: 62%;
  height: 655px;
`;
const Mainimg3 = styled.img`
  width: 62%;
  height: 505px;
`;
const IntroTextDiv = styled.div`
  width: 800px;
  height: fit-content;
  flex-direction: column;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const ShareIntroTextCss = css`
  width: 850px;
  height: fit-content;
  flex-direction: column;
  z-index: 10;
`;
const FirstIntroTextDiv = styled.div`
  ${ShareIntroTextCss};
  position: relative;
  left: 200px;
  align-items: left;
  display: flex;
`;
const SecAndThirdIntroTextDiv = styled.div`
  ${ShareIntroTextCss};
  position: relative;
  right: 200px;
  align-items: right;
  display: flex;
`;
const Mainimg4 = styled.div`
  background: url(${Examimg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 749px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntrotextBold = styled.div`
  width: 100%;
  height: 70px;
  font-weight: 700;
  font-size: 64px;
  line-height: 76.8px;
  color: #1e1e1e;
  margin-bottom: 20px;
`;
const Introtextmedium = styled.div`
  height: 68px;
  font-weight: 300;
  font-size: 28px;
  line-height: 33.6px;
  color: #1e1e1e;
`;
const LasttextBold = styled.div`
  width: 1300px;
  height: 77px;
  align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;

  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  letter-spacing: 0em;
  text-align: center;
`;
const Lasttextmedium = styled.div`
  width: 490px;
  height: 102px;
  align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  font-size: 28px;
  font-weight: 300;
  line-height: 33.6px;
  letter-spacing: 0em;
  text-align: center;
`;

function Intropage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <Wrapping>
      <Bgimg>
        <Logo src={Icon}></Logo>
        <BgContentDiv>
          <Titletext>카페를 좋아하는 당신을 위한 지도</Titletext>
          <Titletext fontWeight="700">CMAP</Titletext>
          <SubTitletext>좀 더 쉽고, 빠르고, 간편하게 나의 안성맞춤 카페지도</SubTitletext>
          <LoginBtn onClick={goToLogin}>Login</LoginBtn>
        </BgContentDiv>
      </Bgimg>
      <CafeIntroWholeDiv>
        <IntroDiv>
          <FirstIntroTextDiv>
            <IntrotextBold>내가 찾던 안성맞춤 카페</IntrotextBold>
            <Introtextmedium>
              지도를 통해 카페 위치부터 리뷰까지 붙어있는 스티커로 원하는 테마의 카페도 한 번에
              찾아보세요!
            </Introtextmedium>
          </FirstIntroTextDiv>
          <Mainimg1 src={Examimg}></Mainimg1>
        </IntroDiv>
        <IntroDiv>
          <Mainimg2 src={Examimg}></Mainimg2>
          <SecAndThirdIntroTextDiv>
            <IntrotextBold>하나뿐인 나만의 카페 지도</IntrotextBold>
            <Introtextmedium>
              가봤던 카페와 가보고 싶은 카페를 저장해서 나만의 지도를 만들고 기록해보세요!
            </Introtextmedium>
          </SecAndThirdIntroTextDiv>
        </IntroDiv>
        <IntroDiv>
          <Mainimg3 src={Examimg}></Mainimg3>
          <SecAndThirdIntroTextDiv>
            <IntrotextBold>나에게 딱 맞는 카페 추천</IntrotextBold>
            <Introtextmedium>
              무슨 카페를 갈지 고민될 때 안성맞춤 카페를 추천해드려요!
            </Introtextmedium>
          </SecAndThirdIntroTextDiv>
        </IntroDiv>
        <Mainimg4 src={Examimg}>
          <IntroTextDiv>
            <LasttextBold>추억을 공유할 수 있는 리뷰기능</LasttextBold>
            <Lasttextmedium>
              다른 사람들에게도 추천할 수 있도록 내가 가본 카페 리뷰를 작성하고 추억도 만들어
              보세요!
            </Lasttextmedium>
          </IntroTextDiv>
        </Mainimg4>
      </CafeIntroWholeDiv>
      <Footer></Footer>
    </Wrapping>
  );
}

export default Intropage;
