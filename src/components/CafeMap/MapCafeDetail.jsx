import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeBtn from '../ThemeBtn';
import CommonBtn from '../CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import CafeReview from './CafeReview';

import { fadeIn } from '../../styles/Transition.style';
import { ReactComponent as Scope } from '../../assets/images/scope.svg';
import SaveCafe from './MapReview/SaveCafe';

const fontColor = 'rgba(249, 255, 253, 1)';

function MapCafeDetail({ closeAction, getReviewIndex, getUpdateReview, color, data }) {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [clickReviewItem, setClickReviewItem] = useState(false);

  const openDetailHandler = () => {
    closeAction();
    getReviewIndex(0);
  };

  const handleModalClick = () => {
    setSaveModalOpen(false);
  };

  // const getImgCount = () => {
  //   const numImages = data.images.length;
  //   switch (numImages) {
  //     case 5:
  //       return '2fr 1fr 1fr 1fr 1fr';
  //     case 4:
  //       return '50% 25% repeat(2,1fr)';
  //     case 3:
  //       return '50% repeat(2,1fr)';
  //     case 2:
  //       return 'repeat(2, 1fr)';
  //     case 1:
  //       return '100%';
  //     default:
  //       return '50% repeat(4,1fr)';
  //   }
  // };
  return (
    <>
      <DetailWrapper className={!clickReviewItem ? 'zIndex' : ''}>
        <DetailImgContainer>
          <AiOutlineLeft className="leftIcon" size={35} onClick={openDetailHandler} />
          {data.images.map((data, index) => (
            <div key={index}>
              <DetailCafeImg src={data} alt="reviewPhoto" isfirst={index === 0 ? '200%' : '100%'} />
            </div>
          ))}
        </DetailImgContainer>
        <DetailCafeName color={color}>{data.title}</DetailCafeName>
        <ThemeBtnContainer>
          <ThemeBtn name="뷰" color={fontColor} background={color} />
          <ThemeBtn name="디저트" color={fontColor} background={color} />
          <ThemeBtn name="커피" color={fontColor} background={color} />
        </ThemeBtnContainer>
        <ReviewScore>
          <Scope fill={color} />
          &nbsp;&nbsp;
          <span>{data.scope} / </span>
          &nbsp;
          <span>게시글 6 / </span>
          &nbsp;
          <span>리뷰 {data.reviews.length}</span>
        </ReviewScore>
        <SaveBtnContainer>
          <CommonBtn
            name="지도에 저장"
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              setSaveModalOpen(true);
            }}
          />
          <CommonBtn
            name="리뷰 작성"
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              getReviewIndex(1);
            }}
          />
        </SaveBtnContainer>
        <ReviewContainer>
          {data.reviews.map((data, index) => (
            <CafeReview
              key={index}
              data={data}
              closeAction={handleModalClick}
              getReviewIndex={getReviewIndex}
              setClickReviewItem={setClickReviewItem}
              getUpdateReview={getUpdateReview}
            />
          ))}
        </ReviewContainer>
      </DetailWrapper>
      {saveModalOpen && <SaveCafe color={color} closeAction={handleModalClick} />}
    </>
  );
}

export default MapCafeDetail;

const DetailImgContainer = styled.div`
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

const DetailCafeImg = styled.img`
  width: 100%;
  height: ${(props) => props.isfirst};
  object-fit: cover;
  &:nth-child(4),
  &:nth-child(5) {
    grid-row: span 2;
  }
`;

const DetailWrapper = styled.div`
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

const DetailCafeName = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

const ThemeBtnContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SaveBtnContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewScore = styled.div`
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

const ReviewContainer = styled.div`
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
