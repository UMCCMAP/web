import React, { useState } from 'react';
import * as R from './styles/ReviewModal.style';
import ImgDragDrop from './ImgDragDrop';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';

function UpdateReview({ closeReview, color, reviewData }) {
  const [updateReviewTitle, setUpdateReviewTitle] = useState(reviewData.title);
  const [updateReviewImg, setUpdateReviewImg] = useState([]);
  const [updateReviewContent, setUpdateReviewContent] = useState(reviewData.content);
  const [updateReviewSubContent, setUpdateReviewSubContent] = useState(reviewData.subContent);
  const [addReviewScope, setAddReviewScope] = useState(reviewData.scope);

  const handleInputTitle = (e) => {
    setUpdateReviewTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setUpdateReviewContent(e.target.value);
  };
  const handleInputSubContent = (e) => {
    setUpdateReviewSubContent(e.target.value);
  };
  const handleClickScope = (id) => {
    setAddReviewScope(id);
  };

  const sendUpdateReview = () => {
    console.log('제목: ' + updateReviewTitle);
    console.log('이미지: ' + updateReviewImg);
    console.log('내용: ' + updateReviewContent);
    console.log('해시태크: ' + updateReviewSubContent);
    console.log('별점 ' + addReviewScope);
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
      <R.ReviewScopeWrapper>
        {[1, 2, 3, 4, 5].map((id) => (
          <ReviewStar
            key={id}
            className="reviewscope"
            id={id}
            fill={id <= addReviewScope ? color : '#F1F1F1'}
            onClick={() => handleClickScope(id)}
          />
        ))}
      </R.ReviewScopeWrapper>
      <R.ReviewBtnWrapper>
        <R.ReviewBtn color={color} onClick={() => sendUpdateReview()}>
          수정하기
        </R.ReviewBtn>
      </R.ReviewBtnWrapper>
    </R.ReviewWriteContainer>
  );
}

export default UpdateReview;
