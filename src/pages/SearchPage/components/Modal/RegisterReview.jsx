import React from 'react';
import * as R from './ReviewModal.style';

function RegisterReview() {
  return (
    <R.ReviewContainer>
      <R.Title>리뷰 작성</R.Title>
      <R.ReviewBox>글 작성 위치</R.ReviewBox>
      <R.ReviewImgBox>사진 올려두는 곳</R.ReviewImgBox>
      <R.ReviewBtn>완료</R.ReviewBtn>
    </R.ReviewContainer>
  );
}

export default RegisterReview;
