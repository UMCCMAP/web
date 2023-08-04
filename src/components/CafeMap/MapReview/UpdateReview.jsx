import React, { useState } from 'react';
import * as R from './styles/ReviewModal.style';
import ImgDragDrop from './ImgDragDrop';

function UpdateReview({ closeReview, color, reviewData }) {
  const [updateReviewTitle, setUpdateReviewTitle] = useState(reviewData.title);
  const [updateReviewImg, setUpdateReviewImg] = useState([]);
  const [updateReviewContent, setUpdateReviewContent] = useState(reviewData.content);
  const [updateReviewSubContent, setUpdateReviewSubContent] = useState(reviewData.subContent);

  const handleInputTitle = (e) => {
    setUpdateReviewTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setUpdateReviewContent(e.target.value);
  };
  const handleInputSubContent = (e) => {
    setUpdateReviewSubContent(e.target.value);
  };

  const sendUpdateReview = () => {
    console.log('제목: ' + updateReviewTitle);
    console.log('이미지: ' + updateReviewImg);
    console.log('내용: ' + updateReviewContent);
    console.log('해시태크: ' + updateReviewSubContent);
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
      <R.ImgWrap color={color}>
        <ImgDragDrop color={color} addImg={setUpdateReviewImg} data={reviewData.images} />
      </R.ImgWrap>
      <R.ReviewContentWrap color={color}>
        <R.ReviewContent
          type="text-area"
          value={updateReviewContent}
          color={color}
          onChange={handleInputContent}
        />
      </R.ReviewContentWrap>
      <R.ReviewSubContent
        type="text"
        name="reviewSubContent"
        placeholder="해시태그, 주제 등 서브 내용"
        color={color}
        value={updateReviewSubContent}
        onChange={handleInputSubContent}
      />
      <R.ReviewBtnWrapper>
        <R.ReviewBtn color={color} onClick={() => sendUpdateReview()}>
          수정하기
        </R.ReviewBtn>
      </R.ReviewBtnWrapper>
    </R.ReviewWriteContainer>
  );
}

export default UpdateReview;
