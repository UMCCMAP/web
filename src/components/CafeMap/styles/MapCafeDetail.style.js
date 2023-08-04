import styled from 'styled-components';
import { fadeIn } from '../../../styles/Transition.style';

export const DetailImgContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr repeat(2, 1fr);
  // grid-template-columns: ${(props) => props.gridtemplatecolumns};
  grid-template-columns: 2fr repeat(2, 1fr);

  width: 100%;
  height: 25%;
  overflow: hidden;
  position: relative;
  // > div:nth-child(2) {
  //   background-color: red;
  //   grid-row: span 2;
  // }
  // > div:nth-child(3) {
  //   background-color: orange;
  // }
  // > div:nth-child(4) {
  //   background-color: yellow;
  // }
  // > div:nth-child(5) {
  //   background-color: green;
  // }
  // > div:nth-child(6) {
  //   background-color: blue;
  // }

  .leftIcon {
    position: absolute;
    top: 10px;
    left: 5px;
    color: rgba(249, 255, 253, 1);
    cursor: pointer;
  }
`;

export const DetailCafeImg = styled.img`
  width: 100%;
  height: ${(props) => props.isfirst};
  object-fit: cover;
  &:nth-child(4),
  &:nth-child(5) {
    grid-row: span 2;
  }
`;

export const DetailWrapper = styled.div`
  width: 500px;
  height: 100vh;
  background-color: rgba(249, 255, 253, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  --green: rgba(33, 174, 33, 1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  animation: ${fadeIn} 0.3s ease-in-out;
  &.zIndex {
    z-index: 1;
  }
`;

export const DetailCafeName = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const ThemeBtnContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaveBtnContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 16px;
    height: 16px;
  }
  > span {
    text-align: center;
    font-size: 16px;
    color: rgba(0, 127, 211, 1);
    margin-top: 3px;
  }
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
