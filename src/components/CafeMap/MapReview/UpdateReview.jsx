import React, { useState } from 'react';
import * as R from './ReviewModal.style';

function RegisterReview({ closeReview, color }) {
  const [updateReviewTitle, setUpdateReviewTitle] = useState('');
  const [updateReviewContent, setUpdateReviewContent] = useState('');
  const [updateReviewSubContent, setUpdateReviewSubContent] = useState('');

  const handleInputTitle = (e) => {
    setUpdateReviewTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setUpdateReviewContent(e.target.value);
  };
  const handleInputSubContent = (e) => {
    setUpdateReviewSubContent(e.target.value);
  };

  return (
    <R.ReviewWriteContainer>
      <R.Title>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
        <p>리뷰 수정</p>
      </R.Title>
      <R.ReviewTitle
        type="text"
        name="reviewTitle"
        placeholder="제목"
        value={updateReviewTitle}
        onChange={handleInputTitle}
      />
      <R.ImgContainer>
        <R.ImgItem color={color}></R.ImgItem>
        <R.ImgItem color={color}></R.ImgItem>
        <R.ImgItem color={color}></R.ImgItem>
        <R.ImgItem color={color}></R.ImgItem>
      </R.ImgContainer>
      <R.ReviewContent
        type="text-area"
        value={updateReviewContent}
        color={color}
        onChange={handleInputContent}
      />
      <R.ReviewSubContent
        type="text"
        name="reviewSubContent"
        placeholder="해시태그, 주제 등 서브 내용"
        color={color}
        value={updateReviewSubContent}
        onChange={handleInputSubContent}
      />
      <R.ReviewBtnWrapper>
        <R.ReviewBtn color={color}>수정하기</R.ReviewBtn>
      </R.ReviewBtnWrapper>
    </R.ReviewWriteContainer>
  );
}

export default RegisterReview;
