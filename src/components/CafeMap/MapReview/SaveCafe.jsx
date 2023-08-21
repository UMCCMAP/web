import React, { useState } from 'react';
import baseAxios from '@/apis/baseAxios';
import * as M from '@/styles/Modal.style';
import * as S from './styles/SaveCafe.style';
import closeSvg from '@/assets/images/close.svg';

function SaveCafe({ color, closeAction, data }) {
  const [clickSave, setClickSave] = useState(data?.cafeType != null ? data?.cafeType : '');

  const sendSaveType = async () => {
    await baseAxios
      .post(
        `/map/place/${data.idx}`,
        {
          type: clickSave,
        },
        {
          'Content-Type': 'application/json',
        },
      )
      .then(function (res) {
        if (res.status === 201) {
          location.reload();
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  };

  return (
    <M.ModalBackground>
      <M.ModalContainer width="470px" height="305px">
        <M.CloseReviewModal onClick={closeAction}>
          <img src={closeSvg} alt="close" />
        </M.CloseReviewModal>
        <S.ReviewContainer>
          <S.AddBtnContainer>
            <S.AddBtn
              color={color}
              onClick={() => setClickSave('WANT')}
              className={clickSave === 'WANT' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'WANT' ? 'white' : color }}>WANT</h2>
              <p>가보고 싶은 카페를 저장해요! 언제든지 지도에서 확인할 수 있어요.</p>
            </S.AddBtn>
            <S.AddBtn
              color={color}
              onClick={() => setClickSave('WENT')}
              className={clickSave === 'WENT' ? 'clicked' : ''}
            >
              <h2 style={{ color: clickSave === 'WENT' ? 'white' : color }}>WENT</h2>
              <p>
                카페가 마음에 들었거나 코멘트가 있으면 리뷰를 작성하거나 지도에 저장할 수 있어요.
              </p>
            </S.AddBtn>
          </S.AddBtnContainer>
          <S.SaveBtn color={color} onClick={sendSaveType}>
            저장
          </S.SaveBtn>
        </S.ReviewContainer>
      </M.ModalContainer>
    </M.ModalBackground>
  );
}

export default SaveCafe;
