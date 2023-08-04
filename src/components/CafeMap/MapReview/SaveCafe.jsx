import React, { useState } from 'react';
import * as R from './styles/ReviewModal.style';
import * as M from '../../../styles/Modal.style';
import * as S from './styles/SaveCafe.style';

function SaveCafe({ color, closeAction }) {
  const [clickSave, setClickSave] = useState('');

  const sendSaveType = () => {
    console.log(clickSave);
    closeAction();
  };

  return (
    <M.ModalBackground>
      <M.ModalContainer width="470px" height="305px">
        <M.CloseReviewModal onClick={closeAction}>
          <img src="src/assets/images/close.svg" alt="close" />
        </M.CloseReviewModal>
        <R.ReviewContainer>
          <S.AddBtnContainer>
            <S.AddBtn
              color={color}
              onClick={() => setClickSave('want')}
              className={clickSave === 'want' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'want' ? 'white' : color }}>WANT</h2>
              <p>가보고 싶은 카페를 저장해요! 언제든지 지도에서 확인할 수 있어요.</p>
            </S.AddBtn>
            <S.AddBtn
              color={color}
              onClick={() => setClickSave('went')}
              className={clickSave === 'went' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'went' ? 'white' : color }}>WENT</h2>
              <p>
                카페가 마음에 들었거나 코멘트가 있으면 리뷰를 작성하거나 지도에 저장할 수 있어요.
              </p>
            </S.AddBtn>
          </S.AddBtnContainer>
          <S.SaveBtn color={color} onClick={sendSaveType}>
            저장
          </S.SaveBtn>
        </R.ReviewContainer>
      </M.ModalContainer>
    </M.ModalBackground>
  );
}

export default SaveCafe;
