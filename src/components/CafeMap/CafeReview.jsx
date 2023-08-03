import React from 'react';
import styled from 'styled-components';

function CafeReview({
  content,
  reviewImg,
  userImg,
  userName,
  writeDate,
  visitCount,
  clickEvent,
  clickIndex,
}) {
  const handleClick = () => {
    clickEvent();
  };

  return (
    <ReviewContainer
      onClick={() => {
        clickIndex(2);
        handleClick();
      }}
    >
      <ReviewItem>
        <div>{content} </div>
        <img src={`${reviewImg}`} alt="리뷰 사진" />
      </ReviewItem>
      <ReviewWriter>
        <img src={`${userImg}`} alt="profile" />
        <div>
          <WriterName>{userName}</WriterName>
          <WriterInfo>
            <span>{writeDate}</span>
            <span>{visitCount}</span>
            <span>영수증</span>
          </WriterInfo>
        </div>
      </ReviewWriter>
    </ReviewContainer>
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
  align-items: center;
  width: 100%;
  margin-bottom: 5x;
  > div {
    width: 70%;
    font-size: 16px;
    line-height: 1.2;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 10px;
  }
  > img {
    background-color: gray;
    height: 100%;
    border-radius: 7px;
    object-fit: contain;
  }
`;
const ReviewWriter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
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
