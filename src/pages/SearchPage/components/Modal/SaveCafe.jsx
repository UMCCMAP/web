import React from 'react';
import * as R from './ReviewModal.style';
import styled from 'styled-components';

function SaveCafe() {
  return (
    <R.ReviewContainer>
      <AddBtnContainer>
        <AddBtn height="150px">가본 카페</AddBtn>
        <AddBtn height="150px">가보고 싶은 카페</AddBtn>
      </AddBtnContainer>
      <AddBtn height="50px">저장</AddBtn>
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
  width: 150px;
  height: ${(props) => props.height};
  border-radius: 50px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;
