import React from 'react';
import { styled } from 'styled-components';
import Bg from '../assets/IntroIcon/cafeimg.png';
import Icon from '../assets/CMAP.png';
import Examimg from '../assets/IntroIcon/ex5.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Bgimg = styled.div`
  width: 100%;
  height: 632px;
  background: url(${Bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
`;
const Logo = styled.img`
  width: 116px;
  height: auto;
  top: 40px;
  left: 100px;
  position: relative;
`;

const Titletext = styled.div`
  height: 76px;
  width: 1000px;
  font-size: 64px;
  font-weight: 400;
  line-height: 76.38px;
  color: white;
  position: relative;
  top: 200px;
  left: 100px;
`;

const TitletextThick = styled.div`
  height: 76px;
  width: 200px;
  font-size: 64px;
  font-weight: 700;
  line-height: 76.38px;
  color: white;
  position: relative;
  top: 200px;
  left: 100px;
`;

// 글씨 너비 어떻게 할지
const SubTitletext = styled.div`
  width: 360px;
  height: 66px;
  top: 210px;
  left: 100px;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.41px;
  color: white;
  position: relative;
`;
const LoginBtn = styled.button`
  width: 150px;
  height: 44px;
  padding: 10px 50px 10px 50px;
  border-radius: 32px;
  gap: 10px;
  position: relative;
  top: 266px;
  left: 93px;
  color: #939393;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  height: 3533px;
  background-color: #f0f0f0;
`;

const Mainimg1 = styled.img`
  width: 62%;
  height: 664px;
  top: 960px;
  right: 0px;
  position: absolute;
`;
const Mainimg2 = styled.img`
  width: 62%;
  height: 545px;
  top: 1624px;
  left: 0px;
  position: absolute;
`;
const Mainimg3 = styled.img`
  width: 62%;
  height: 545px;
  top: 2169px;
  left: 158px;
  position: absolute;
`;
const Mainimg4 = styled.img`
  width: 100%;
  height: 669px;
  position: absolute;
  top: 2784px;
  right: 0px;
`;
const IntrotextBind1 = styled.div`
  width: 46.3vw;
  height: 183px;
  gap: 38px;
  position: absolute;
  top: 1241px;
  left: 100px;
`;
const IntrotextBind2 = styled.div`
  width: 46.3vw;
  height: 183px;
  gap: 38px;
  position: absolute;
  top: 1818px;
  right: 100px;
  text-align: right;
`;
const IntrotextBind3 = styled.div`
  width: 43.2vw;
  height: 183px;
  gap: 38px;
  position: absolute;
  top: 2396px;
  right: 100px;
`;
const IntrotextBold = styled.div`
  width: 100%;
  height: 70px;
  font-weight: 700;
  font-size: 64px;
  line-height: 76.8px;
  color: #1e1e1e;
`;
const Introtextmedium = styled.div`
  height: 68px;
  font-weight: 300;
  font-size: 28px;
  line-height: 33.6px;
  color: #1e1e1e;
  position: absolute;
  bottom: 0px;
`;
const LasttextBold = styled.div`
  width: 55%;
  height: 77px;
  position: absolute;
  top: 2974px;
  left: 326px;
  align: center;

  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  letter-spacing: 0em;
  text-align: center;
`;
const Lasttextmedium = styled.div`
  width: 28%;
  height: 102px;
  position: absolute;
  top: 3098px;
  left: 507px;
  align: center;

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
    <>
      <Main>
        <Bgimg>
          <Logo src={Icon}></Logo>
          <Titletext>카페를 좋아하는 당신을 위한 지도</Titletext>
          <TitletextThick>CMAP</TitletextThick>
          <SubTitletext>좀 더 쉽고, 빠르고, 간편하게 나의 안성맞춤 카페지도</SubTitletext>
          <LoginBtn onClick={goToLogin}>Login</LoginBtn>
        </Bgimg>
        <Mainimg1 src={Examimg}></Mainimg1>
        <Mainimg2 src={Examimg}></Mainimg2>
        <Mainimg3 src={Examimg}></Mainimg3>
        <IntrotextBind1>
          <IntrotextBold>내가 찾던 안성맞춤 카페</IntrotextBold>
          <Introtextmedium>
            지도를 통해 카페 위치부터 리뷰까지 붙어있는 스티커로 원하는 테마의 카페도 한 번에
            찾아보세요!
          </Introtextmedium>
        </IntrotextBind1>
        <IntrotextBind2>
          <IntrotextBold>하나뿐인 나만의 카페 지도</IntrotextBold>
          <Introtextmedium>
            가봤던 카페와 가보고 싶은 카페를 저장해서 나만의 지도를 만들고 기록해보세요!
          </Introtextmedium>
        </IntrotextBind2>
        <IntrotextBind3>
          <IntrotextBold>나에게 딱 맞는 카페 추천</IntrotextBold>
          <Introtextmedium>
            무슨 카페를 갈지 고민될 때 안성맞춤 카페를 추천해드려요!
          </Introtextmedium>
        </IntrotextBind3>
        <Mainimg4 src={Examimg}></Mainimg4>
        <LasttextBold>추억을 공유할 수 있는 리뷰기능</LasttextBold>
        <Lasttextmedium>
          다른 사람들에게도 추천할 수 있도록 내가 가본 카페 리뷰를 작성하고 추억도 만들어 보세요!
        </Lasttextmedium>
        <Footer></Footer>
      </Main>
    </>
  );
}

export default Intropage;
