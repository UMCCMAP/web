import React, { useState } from 'react';
import styled from 'styled-components';
import * as R from './ReviewModal.style';
import * as M from '../../../styles/Modal.style';

function SaveCafe({ color, closeAction }) {
  const [clickSave, setClickSave] = useState('');

  return (
    <M.ModalBackground>
      <M.ModalContainer width="720px" height="400px">
        <M.CloseReviewModal onClick={closeAction}>
          <img src="src/assets/images/close.svg" alt="close" />
        </M.CloseReviewModal>
        <R.ReviewContainer>
          <AddBtnContainer>
            <AddBtn
              color={color}
              onClick={() => setClickSave('want')}
              className={clickSave === 'want' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'want' ? 'white' : color }}>가볼 카페</h2>
              <p>가보고 싶은 카페를 저장해요! 언제든지 지도에서 확인할 수 있어요.</p>
            </AddBtn>
            <AddBtn
              color={color}
              onClick={() => setClickSave('went')}
              className={clickSave === 'went' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'went' ? 'white' : color }}>가본 카페</h2>
              <p>
                카페가 마음에 들었거나 코멘트가 있으면 리뷰를 작성하거나 지도에 저장할 수 있어요.
              </p>
            </AddBtn>
          </AddBtnContainer>
          <SaveBtn color={color}>저장!</SaveBtn>
        </R.ReviewContainer>
      </M.ModalContainer>
    </M.ModalBackground>
  );
}

export default SaveCafe;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const AddBtn = styled.button`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid ${(props) => props.color};
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  font-family: Pretendard;
  text-align: center;
  box-shadow: 0.8rem 0.5rem 1.4rem #bec5d0, -0.3rem -0.4rem 0.8rem #fbfbfb;
  > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  > p {
    width: 110px;
    font-size: 12px;
    font-weight: 400;
  }
  &:active {
    box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb, inset 0.3rem 0.4rem 0.8rem #bec5d0;
    cursor: pointer;
  }
  &.clicked {
    background-color: ${(props) => props.color};
    box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb, inset 0.3rem 0.4rem 0.8rem #bec5d0;
    cursor: pointer;
  }
`;

const SaveBtn = styled.button`
  width: 137px;
  heigth: 40px;
  border-radius: 32px;
  padding: 7px;
  background-color: ${(props) => props.color};
  font-family: Pretendard;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
`;
