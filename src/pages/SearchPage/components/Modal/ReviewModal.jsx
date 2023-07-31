import React from 'react';
import styled from 'styled-components';
import RegisterReview from './RegisterReview';
import ReadReview from './ReadReview';
import UpdateReview from './UpdateReview';
import SaveCafe from './SaveCafe';

function ReviewModal({ closeAction, modalIndex }) {
  const closeReviewModal = () => {
    closeAction(false);
  };
  return (
    <ModalBackground>
      {modalIndex === 1 ? (
        <ReviewContainer width="720px" height="400px">
          <CloseReviewModal onClick={closeReviewModal}>
            <img src="src/assets/images/close.svg" alt="close" />
          </CloseReviewModal>
          <SaveCafe />
        </ReviewContainer>
      ) : (
        <ReviewContainer height="560px">
          <CloseReviewModal onClick={closeReviewModal}>X</CloseReviewModal>
          {modalIndex === 2 ? (
            <RegisterReview />
          ) : modalIndex === 3 ? (
            <ReadReview />
          ) : modalIndex === 4 ? (
            <UpdateReview />
          ) : undefined}
        </ReviewContainer>
      )}
    </ModalBackground>
  );
}

export default ReviewModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ReviewContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 32px;
`;

const CloseReviewModal = styled.button`
  position: absolute;
  font-size: 20px;
  right: 20px;
  top: 25px;
  border: none;
  weight: 700;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;
