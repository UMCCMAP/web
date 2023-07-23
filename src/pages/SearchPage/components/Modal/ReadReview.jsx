import React, { useState } from 'react';
import * as R from './ReviewModal.style';
import styled from 'styled-components';
import CommonBtn from '../../../../components/CommonBtn';
import ReviewModal from './ReviewModal';

function ReadReview() {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(2);

  const handleModalClick = () => {
    setReviewModalOpen(!reviewModalOpen);
  };

  return (
    <R.ReviewContainer>
      <InfoContainer>
        <WriterContainer>
          <span>작성자 이름</span>
          <span>20NN 년 NN 월 NN 일</span>
        </WriterContainer>
        <BtnContainer>
          <CommonBtn
            name="수정"
            width="30px"
            color="rgba(0, 0, 0, 1)"
            background="rgba(217, 217, 217, 1)"
            style={{
              lineHeight: '1',
              fontSize: '10px',
              fontWeight: '400',
              padding: '3px',
            }}
            clickEvent={() => {
              handleModalClick();
              setModalItem(4);
            }}
          />
          <CommonBtn
            name="삭제"
            width="30px"
            color="rgba(0, 0, 0, 1)"
            background="rgba(217, 217, 217, 1)"
            style={{ lineHeight: '1', fontSize: '10px', fontWeight: '400', padding: '3px' }}
          />
        </BtnContainer>
      </InfoContainer>
      <R.ReviewBox>글</R.ReviewBox>
      <R.ReviewImgBox>사진</R.ReviewImgBox>
      {reviewModalOpen && <ReviewModal closeAction={handleModalClick} modalIndex={modalItem} />}
    </R.ReviewContainer>
  );
}

export default ReadReview;

const InfoContainer = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const WriterContainer = styled.div`
  font-size: 10px;
  > span:first-child {
    font-weight: 700;
    margin-right: 5px;
  }
  > span:last-child:before {
    content: '•';
    margin-right: 5px;
  }
`;

const BtnContainer = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
