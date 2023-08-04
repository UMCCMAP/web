import React from 'react';
import * as R from './styles/ReviewModal.style';
import styled from 'styled-components';
import CommonBtn from '../../CommonBtn';
import * as M from '../../../styles/Modal.style';

function ReadReview({ data, closeAction, getReviewIndex, setClickReviewItem }) {
  const closeReviewModal = () => {
    closeAction(false);
    setClickReviewItem(false);
  };

  return (
    <M.ModalBackground>
      <M.ModalContainer width="500px" height="560px">
        <M.CloseReviewModal onClick={closeReviewModal}>X</M.CloseReviewModal>
        <R.ReviewContainer>
          <InfoContainer>
            <WriterContainer>
              <span>{data.user}</span>
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
                  closeAction(false);
                  getReviewIndex(2);
                  setClickReviewItem(false);
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
          <ReviewBox width="430px" height="325px">
            {data.content}
          </ReviewBox>
          <ReviewImgBox>{data.images.length}</ReviewImgBox>
        </R.ReviewContainer>
      </M.ModalContainer>
    </M.ModalBackground>
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

const ReviewBox = styled.div`
  width: 430px;
  height: 325px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ReviewImgBox = styled.div`
  width: 430px;
  height: 70px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
