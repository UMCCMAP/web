import React from 'react';
import * as R from './styles/ReviewModal.style';
import * as M from '../../../styles/Modal.style';
import * as RR from './styles/ReadReview.style';
import CommonBtn from '../../CommonBtn';

function ReadReview({ data, closeAction, getReviewIndex, getUpdateReview, setClickReviewItem }) {
  const [year, month, day] = data.data.split('-');

  const closeReviewModal = () => {
    closeAction(false);
    setClickReviewItem(false);
  };

  return (
    <M.ModalBackground>
      <M.ModalContainer width="500px" height="560px">
        <M.CloseReviewModal onClick={closeReviewModal}>X</M.CloseReviewModal>
        <R.ReviewContainer>
          <RR.InfoContainer>
            <RR.WriterContainer>
              <span>{data.user}</span>
              <span>
                {year} 년 {month} 월 {day} 일
              </span>
            </RR.WriterContainer>
            <RR.BtnContainer>
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
                  getUpdateReview(data);
                }}
              />
              <CommonBtn
                name="삭제"
                width="30px"
                color="rgba(0, 0, 0, 1)"
                background="rgba(217, 217, 217, 1)"
                style={{ lineHeight: '1', fontSize: '10px', fontWeight: '400', padding: '3px' }}
              />
            </RR.BtnContainer>
          </RR.InfoContainer>
          <RR.ReviewBox width="430px" height="325px">
            {data.content}
          </RR.ReviewBox>
          <RR.ReviewImgBox>{data.images.length}</RR.ReviewImgBox>
        </R.ReviewContainer>
      </M.ModalContainer>
    </M.ModalBackground>
  );
}

export default ReadReview;
