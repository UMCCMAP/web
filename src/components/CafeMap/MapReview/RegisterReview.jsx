import React, { useState } from 'react';
import baseAxios from '../../../apis/baseAxios';
import * as R from './styles/ReviewCU.style';
import ImgDragDrop from './ImgDragDrop';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';

function RegisterReview({ closeReview, color }) {
  const form = new FormData();
  const token = localStorage.getItem('accessToken');
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

  const blobUrlToFile = async () => {
    for (let index = 0; index < addReviewImg.length; index++) {
      const file = addReviewImg[index];
      const response = await fetch(file);
      const blob = await response.blob();
      const imgFile = new File([blob], `image${index}.png`, { type: 'image/png' });
      form.append('multipartFile', imgFile);
    }
    await baseAxios
      .post('s3/file', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(function (response) {
        sendRegisterReview(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const sendRegisterReview = async (imgData) => {
    await baseAxios
      .post(
        'map/place/4/review',
        {
          score: addReviewScope,
          title: addReviewTitle,
          content: addReviewContent,
          keyword: addReviewSubContent,
          imageUrls: imgData,
        },
        {
          headers: {
            Authorization: token,
          },
          'Content-Type': 'application/json',
        },
      )
      .then(function (response) {
        if (response.status === 201) {
          location.reload();
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
        <R.ReviewBtn color={color} onClick={() => blobUrlToFile()}>
          작성하기
        </R.ReviewBtn>
      </R.ReviewBtnWrapper>
    </R.ReviewWriteContainer>
  );
}

export default RegisterReview;
