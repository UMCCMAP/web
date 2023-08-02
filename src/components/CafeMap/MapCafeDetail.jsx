import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeBtn from '../ThemeBtn';
import CommonBtn from '../CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import CafeReview from './CafeReview';
import ReviewModal from './MapReview/ReviewModal';
import { ReactComponent as Scope } from '../../assets/images/scope.svg';

const fontColor = 'rgba(249, 255, 253, 1)';

function MapCafeDetail({ isOpen, closeAction, getReviewIndex, color }) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(0);

  const openDetailHandler = () => {
    closeAction(!isOpen);
    getReviewIndex(0);
  };

  const handleModalClick = () => {
    setReviewModalOpen(!reviewModalOpen);
  };

  const handleModalIndexClick = (index) => {
    setModalItem(index);
  };

  return (
    <DetailWrapper
      className={`${isOpen ? 'open' : ''} ${modalItem !== 1 && modalItem !== 2 ? 'zIndex' : ''}`}
    >
      <DetailImgContainer>
        <AiOutlineLeft className="leftIcon" size={35} onClick={openDetailHandler} />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </DetailImgContainer>
      <DetailCafeName color={color}>카페 이름</DetailCafeName>
      <ThemeBtnContainer>
        <ThemeBtn name="뷰" color={fontColor} background={color} />
        <ThemeBtn name="디저트" color={fontColor} background={color} />
        <ThemeBtn name="커피" color={fontColor} background={color} />
      </ThemeBtnContainer>
      <ReviewScore>
        <Scope fill={color} />
        &nbsp;&nbsp;
        <span>4.2 / </span>
        &nbsp;
        <span>게시글 6 / </span>
        &nbsp;
        <span>리뷰 12</span>
      </ReviewScore>
      <SaveBtnContainer>
        <CommonBtn
          name="지도에 저장"
          width="70px"
          color={fontColor}
          background={color}
          clickEvent={() => {
            handleModalClick();
            setModalItem(1);
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
        <CafeReview
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in vero, deleniti fugiat
          laudantium maiores corrupti, dolor ea, quae ad maxime inventore consequuntur? Eaque
          voluptatem neque, at dignissimos corrupti vitae?"
          reviewImg="src/assets/images/coffee.svg"
          userImg="src/assets/images/coffee.svg"
          userName="작성자 이름"
          writeDate="날짜"
          visitCount="방문 횟수"
          clickIndex={handleModalIndexClick}
          clickEvent={handleModalClick}
        />
        <CafeReview
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in vero, deleniti fugiat
          laudantium maiores corrupti, dolor ea, quae ad maxime inventore consequuntur? Eaque
          voluptatem neque, at dignissimos corrupti vitae?"
          reviewImg="src/assets/images/coffee.svg"
          userImg="src/assets/images/coffee.svg"
          userName="작성자 이름"
          writeDate="날짜"
          visitCount="방문 횟수"
          clickIndex={handleModalIndexClick}
          clickEvent={handleModalClick}
        />
      </ReviewContainer>
      {reviewModalOpen && (
        <ReviewModal
          closeAction={handleModalClick}
          modalIndex={modalItem}
          setModalItem={setModalItem}
          getReviewIndex={getReviewIndex}
          color={color}
        />
      )}
    </DetailWrapper>
  );
}

export default MapCafeDetail;

const DetailImgContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  height: 25%;
  > div:nth-child(2) {
    background-color: red;
    grid-row: span 2;
  }
  > div:nth-child(3) {
    background-color: orange;
  }
  > div:nth-child(4) {
    background-color: yellow;
  }
  > div:nth-child(5) {
    background-color: green;
  }
  > div:nth-child(6) {
    background-color: blue;
  }
  .leftIcon {
    position: absolute;
    top: 10px;
    left: 5px;
    color: rgba(249, 255, 253, 1);
    cursor: pointer;
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
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  &.open {
    visibility: visible;
    opacity: 1;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
