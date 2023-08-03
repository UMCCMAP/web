import React from 'react';
import * as R from './ReviewModal.style';
import styled from 'styled-components';

function SaveCafe({ color }) {
  return (
    <R.ReviewContainer>
      <AddBtnContainer>
        <AddBtn height="150px" color={color}>
          <h2 style={{ color: color }}>가볼 카페</h2>
          <p>가보고 싶은 카페를 저장해요! 언제든지 지도에서 확인할 수 있어요.</p>
        </AddBtn>
        <AddBtn color={color}>
          <h2 style={{ color: color }}>가본 카페</h2>
          <p>카페가 마음에 들었거나 코멘트가 있으면 리뷰를 작성하거나 지도에 저장할 수 있어요.</p>
        </AddBtn>
      </AddBtnContainer>
      <SaveBtn color={color}>저장!</SaveBtn>
    </R.ReviewContainer>
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
`;
