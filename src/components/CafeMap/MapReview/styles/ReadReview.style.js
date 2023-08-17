import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ReadReviewContainer = styled.div`
  position: relative;
  width: 650px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 0;
  box-sizing: border-box;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  > hr {
    width: 90%;
    border: 1px solid rgba(147, 147, 147, 1);
    margin: 25px 0 10px 0;
  }
`;

export const Title = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-family: 'Pretendard';
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.color};
  }
  > img {
    width: 26px;
    height: 26px;
  }
`;

export const SubContentWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const SubContent = styled.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: rgba(54, 54, 54, 1);
`;
export const Scope = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfoWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
`;
export const Date = styled.div`
  font-family: 'Pretendard';
  font-size: 13px;
  text-align: center;
  color: rgba(147, 147, 147, 1);
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > p {
    font-family: 'Pretendard';
    font-size: 12px;
    text-align: center;
    color: rgba(147, 147, 147, 1);
    margin-right: 10px;
  }
  > img {
    padding: 3px;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 1);
    object-fit: contain;
  }
`;

export const ImgWrap = styled.div`
  width: 80%;
  height: 310px;
  border-radius: 21px;
  overflow: hidden;
  margin-bottom: 20px;
`;
export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-prev,
  .slick-next {
    display: none;
  }
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
export const ArrowNextDiv = styled.div`
  position: absolute;
  right: 20px;
  z-index: 99;
  text-align: right;
`;
export const ArrowPrevDiv = styled.div`
  position: absolute;
  left: 20px;
  z-index: 99;
  text-align: left;
`;

export const Content = styled.div`
  flex: 1;
  width: 80%;
  padding: 20px 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-family: 'Pretendard';
  font-size: 12px;
  text-align: center;
  color: rgba(55, 55, 55, 1);
  line-height: 1.6;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UDWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    font-family: 'Pretendard';
    font-size: 16px;
    text-align: center;
    color: rgba(147, 147, 147, 1);
    margin: 0 10px;
    position: relative;
    cursor: pointer;
    &:first-child {
      margin-left: 0px;
    }
  }
  > hr {
    margin: 0;
    height: 20px;
    border: 1px solid rgba(147, 147, 147, 1);
  }
`;
