import { styled, css } from 'styled-components';
import Bg from '../assets/IntroIcon/cafeimg.png';
import Examimg from '../assets/IntroIcon/ex5.png';

export const Bgimg = styled.div`
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
export const BgContentDiv = styled.div`
  width: 1000px;
  height: 338px;
  flex-direction: column;
  justify-content: left;
  margin-left: 100px;
`;
export const Logo = styled.img`
  width: 116px;
  height: auto;
  top: 40px;
  left: 100px;
  position: absolute;
`;

export const Titletext = styled.div`
  height: 76px;
  max-width: 1000px;
  font-size: 64px;
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: 76.38px;
  color: white;
`;

// 글씨 너비 어떻게 할지
export const SubTitletext = styled.div`
  width: 360px;
  height: 66px;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.41px;
  margin-top: 15px;
  color: white;
`;
export const LoginBtn = styled.button`
  width: 150px;
  height: 44px;

  margin-top: 60px;
  border-radius: 32px;
  color: #939393;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
export const CafeIntroWholeDiv = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
`;
export const IntroDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Mainimg1 = styled.img`
  width: 1900px;
  height: 781px;
  display: flex;
  margin-left: -150px;
  z-index: 1;
`;
export const Mainimg2 = styled.img`
  width: 1500px;
  height: 655px;
`;
export const Mainimg3 = styled.img`
  width: 62%;
  height: 505px;
`;
export const IntroTextDiv = styled.div`
  width: 800px;
  height: fit-content;
  flex-direction: column;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const ShareIntroTextCss = css`
  width: 850px;
  height: fit-content;
  flex-direction: column;
  z-index: 10;
`;
export const FirstIntroTextDiv = styled.div`
  ${ShareIntroTextCss};
  position: relative;
  left: 80px;
  display: flex;
`;
export const SecAndThirdIntroTextDiv = styled.div`
  ${ShareIntroTextCss};
  position: relative;
  right: 80px;
  display: flex;
`;
export const Mainimg4 = styled.div`
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

export const IntrotextBold = styled.div`
  width: 800px;
  height: 70px;
  font-weight: 700;
  font-size: 64px;
  line-height: 76.8px;
  color: #1e1e1e;
  margin-bottom: 20px;
  align-items: ${(props) => (props.align ? props.align : 'left')};
`;
export const Introtextmedium = styled.div`
  height: 68px;
  font-weight: 300;
  font-size: 28px;
  line-height: 33.6px;
  color: #1e1e1e;
  align-items: ${(props) => (props.align ? props.align : 'left')};
`;
export const LasttextBold = styled.div`
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
export const Lasttextmedium = styled.div`
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
