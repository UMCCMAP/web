import styled from 'styled-components';
import { fadeIn } from '../../../styles/Transition.style';

export const DetailImgContainer = styled.div`
  display: grid;
  width: 100%;
  height: 25%;
  overflow: hidden;
  grid-gap: 2px;
  > div {
    overflow: hidden;
  }
  &.two {
    grid-template-columns: 1fr 1fr;
  }
  &.three {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > div:nth-child(2) {
      grid-row: span 2;
      background-color: red;
    }
  }
  &.four {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > div:nth-child(2) {
      grid-row: span 2;
      background-color: red;
    }
    > div:nth-child(5) {
      grid-column: span 2;
      background-color: purple;
    }
  }
  &.five {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > div:nth-child(2) {
      grid-row: span 2;
      background-color: red;
    }
  }
  &.over {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > div:nth-child(2) {
      grid-row: span 2;
      background-color: red;
    }
  }

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
  height: 100%;
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 12.6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 24.8%;
  height: 12.5%;
  cursor: pointer;
  > p {
    margin-top: 5px;
    text-align: center;
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
