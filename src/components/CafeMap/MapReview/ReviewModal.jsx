import React from 'react';
import styled from 'styled-components';
import ReadReview from './ReadReview';
import SaveCafe from './SaveCafe';
import * as M from '../../../styles/Modal.style';

function ReviewModal({ closeAction, modalIndex, setModalItem, getReviewIndex, color }) {
  const closeReviewModal = () => {
    closeAction(false);
    setModalItem(0);
  };
  return (
    <M.ModalBackground>
      {modalIndex === 1 ? (
        <ReviewContainer width="720px" height="400px">
          <CloseReviewModal onClick={closeReviewModal}>
            <img src="src/assets/images/close.svg" alt="close" />
          </CloseReviewModal>
          <SaveCafe color={color} />
        </ReviewContainer>
      ) : (
        <ReviewContainer width="500px" height="560px">
          <CloseReviewModal onClick={closeReviewModal}>X</CloseReviewModal>
          {modalIndex === 2 ? (
            <ReadReview
              closeAction={closeAction}
              setModalItem={setModalItem}
              getReviewIndex={getReviewIndex}
            />
          ) : undefined}
        </ReviewContainer>
      )}
    </M.ModalBackground>
  );
}

export default ReviewModal;

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
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;
