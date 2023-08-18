import React, { useState } from 'react';
import baseAxios from '../../../apis/baseAxios';
import * as R from './styles/ReviewCU.style';
import ImgDragDrop from './ImgDragDrop';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';

function UpdateReview({ closeReview, color, reviewData }) {
  const token = localStorage.getItem('accessToken');

  const [updateReviewTitle, setUpdateReviewTitle] = useState(reviewData.data.title);
  const [updateReviewImg, setUpdateReviewImg] = useState([]);
  const [updateReviewContent, setUpdateReviewContent] = useState(reviewData.data.content);
  const [updateReviewSubContent, setUpdateReviewSubContent] = useState(reviewData.data.keyword);
  const [updateReviewScope, setUpdateReviewScope] = useState(reviewData.data.score);

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
    setUpdateReviewScope(id);
  };

  const sendUpdateReview = async () => {
    await baseAxios
      .put(
        `map/place/cafe-reviews/${reviewData.reviewIdx}`,
        {
          title: updateReviewTitle,
          content: updateReviewContent,
          keyword: updateReviewSubContent,
          score: updateReviewScope,
          imageUrls: updateReviewImg,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(function (response) {
        if (response.status === 204) {
          closeReview(0);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
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
        <ImgDragDrop color={color} addImg={setUpdateReviewImg} data={reviewData.data.imageUrls} />
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
            fill={id <= updateReviewScope ? color : '#F1F1F1'}
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
