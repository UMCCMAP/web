import React from 'react';
import Icon from '../../assets/CMAP.png';
import Examimg from '../../assets/IntroIcon/ex5.png';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Intropage.style';
import * as W from '../../styles/Wapper.style';

function Intropage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <W.LongWrapper height="fit-content">
      <S.Bgimg>
        <S.Logo src={Icon}></S.Logo>
        <S.BgContentDiv>
          <S.Titletext>카페를 좋아하는 당신을 위한 지도</S.Titletext>
          <S.Titletext fontWeight="700">CMAP</S.Titletext>
          <S.SubTitletext>좀 더 쉽고, 빠르고, 간편하게 나의 안성맞춤 카페지도</S.SubTitletext>
          <S.LoginBtn onClick={goToLogin}>Login</S.LoginBtn>
        </S.BgContentDiv>
      </S.Bgimg>
      <S.CafeIntroWholeDiv>
        <S.IntroDiv height="781px">
          <S.FirstIntroTextDiv>
            <S.IntrotextBold>내가 찾던 안성맞춤 카페</S.IntrotextBold>
            <S.Introtextmedium>
              지도를 통해 카페 위치부터 리뷰까지 붙어있는 스티커로 원하는 테마의 카페도 한 번에
              찾아보세요!
            </S.Introtextmedium>
          </S.FirstIntroTextDiv>
          <S.Mainimg1 src={Examimg}></S.Mainimg1>
        </S.IntroDiv>
        <S.IntroDiv>
          <S.Mainimg2 src={Examimg}></S.Mainimg2>
          <S.SecAndThirdIntroTextDiv>
            <S.IntrotextBold align="right">하나뿐인 나만의 카페 지도</S.IntrotextBold>
            <S.Introtextmedium align="right">
              가봤던 카페와 가보고 싶은 카페를 저장해서 나만의 지도를 만들고 기록해보세요!
            </S.Introtextmedium>
          </S.SecAndThirdIntroTextDiv>
        </S.IntroDiv>
        <S.IntroDiv>
          <S.Mainimg3 src={Examimg}></S.Mainimg3>
          <S.SecAndThirdIntroTextDiv>
            <S.IntrotextBold align="right">나에게 딱 맞는 카페 추천</S.IntrotextBold>
            <S.Introtextmedium align="right">
              무슨 카페를 갈지 고민될 때 안성맞춤 카페를 추천해드려요!
            </S.Introtextmedium>
          </S.SecAndThirdIntroTextDiv>
        </S.IntroDiv>
        <S.Mainimg4 src={Examimg}>
          <S.IntroTextDiv>
            <S.LasttextBold>추억을 공유할 수 있는 리뷰기능</S.LasttextBold>
            <S.Lasttextmedium>
              다른 사람들에게도 추천할 수 있도록 내가 가본 카페 리뷰를 작성하고 추억도 만들어
              보세요!
            </S.Lasttextmedium>
          </S.IntroTextDiv>
        </S.Mainimg4>
      </S.CafeIntroWholeDiv>
      <Footer></Footer>
    </W.LongWrapper>
  );
}

export default Intropage;
