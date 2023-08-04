import React, { useState } from 'react';
import styled from 'styled-components';
import ReadReview from './MapReview/ReadReview';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function CafeReview({ data, closeAction, getReviewIndex, getUpdateReview, setClickReviewItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModalClick = () => {
    setReviewModalOpen(false);
  };

  return (
    <>
      <ReviewContainer>
        <ReviewItem>
          <ReviewContent
            isexpanded={isExpanded ? 'initial' : '4'}
            onClick={() => {
              closeAction();
              setReviewModalOpen(true);
              setClickReviewItem(true);
            }}
          >
            {data.content}
          </ReviewContent>
          <button onClick={handleToggleExpand}>
            {!isExpanded ? <MdKeyboardArrowDown size="25" /> : <MdKeyboardArrowUp size="25" />}
          </button>
          <ReviewImgWrap>
            <img src={`${data.images[0]}`} alt="리뷰 사진" />
            <div>{data.images.length}</div>
          </ReviewImgWrap>
        </ReviewItem>
        <ReviewWriter>
          <img src={`${data.userImg}`} alt="profile" />
          <div>
            <WriterName>{data.user}</WriterName>
            <WriterInfo>
              <span>{data.data}</span>
              <span>{data.visit}</span>
              <span>영수증</span>
            </WriterInfo>
          </div>
        </ReviewWriter>
        {reviewModalOpen && (
          <ReadReview
            closeAction={handleModalClick}
            getReviewIndex={getReviewIndex}
            setClickReviewItem={setClickReviewItem}
            getUpdateReview={getUpdateReview}
            data={data}
          />
        )}
      </ReviewContainer>
    </>
  );
}

export default CafeReview;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  padding: 15px 0 10px 10px;
  box-sizing: border-box;
  margin-top: 10px;
  border-top: 0.8px solid black;
  cursor: pointer;
`;

const ReviewItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5x;
  position: relative;
  > button {
    border: none;
    position: absolute;
    right: 155px;
    bottom: 0;
    width: 10px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ReviewContent = styled.p`
  width: 60%;
  font-size: 16px;
  line-height: 1.2;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: ${(props) => props.isexpanded};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 30px;
`;

const ReviewImgWrap = styled.div`
  width: 30%;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
  > div {
    position: absolute;
    right: 0;
    bottom: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 0px 0px 5px 0px;
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const ReviewWriter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  > img {
    padding: 3px;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: green;
    margin-right: 10px;
    object-fit: contain;
  }
`;

const WriterName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const WriterInfo = styled.div`
  margin-top: 3px;
  font-size: 14px;
  color: gray;
  > span::after {
    content: '•';
  }
  > span:last-child::after {
    content: '';
  }
`;
