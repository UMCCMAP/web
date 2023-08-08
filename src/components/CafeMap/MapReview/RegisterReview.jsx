import React, { useState } from 'react';
import * as R from './styles/ReviewModal.style';
import ImgDragDrop from './ImgDragDrop';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';

function RegisterReview({ closeReview, color }) {
  const [addReviewTitle, setAddReviewTitle] = useState('');
  const [addReviewImg, setAddReviewImg] = useState([]);
  const [addReviewContent, setAddReviewContent] = useState('');
  const [addReviewSubContent, setAddReviewSubContent] = useState('');
  const [addReviewScope, setAddReviewScope] = useState(0);

  const handleInputTitle = (e) => {
    setAddReviewTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setAddReviewContent(e.target.value);
  };
  const handleInputSubContent = (e) => {
    setAddReviewSubContent(e.target.value);
  };
  const handleClickScope = (id) => {
    setAddReviewScope(id);
  };

  const sendRegisterReview = () => {
    console.log('제목: ' + addReviewTitle);
    console.log('이미지: ' + addReviewImg);
    console.log('내용: ' + addReviewContent);
    console.log('해시태크: ' + addReviewSubContent);
    console.log('별점 ' + addReviewScope);
  };

  return (
    <R.ReviewWriteContainer>
      <R.Title>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
        <p>리뷰 작성</p>
      </R.Title>
      <R.ReviewTitle
        type="text"
        name="reviewTitle"
        placeholder="제목"
        color={color}
        value={addReviewTitle}
        onChange={handleInputTitle}
      />
      <R.ImgWrap color={color}>
        <ImgDragDrop color={color} addImg={setAddReviewImg} />
      </R.ImgWrap>
      <R.ReviewContentWrap color={color}>
        <R.ReviewContent
          type="text-area"
          value={addReviewContent}
          color={color}
          onChange={handleInputContent}
        />
      </R.ReviewContentWrap>
      <R.ReviewSubContent
        type="text"
        name="reviewSubContent"
        placeholder="해시태그, 주제 등 서브 내용"
        color={color}
        value={addReviewSubContent}
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
        <R.ReviewBtn color={color} onClick={() => sendRegisterReview()}>
          작성하기
        </R.ReviewBtn>
      </R.ReviewBtnWrapper>
    </R.ReviewWriteContainer>
  );
}

export default RegisterReview;
