import React from 'react';
import * as R from './styles/ReviewModal.style';
import CommonBtn from '../../CommonBtn';

function ReadReview({ data, closeReview, getReviewIndex }) {
  // const [year, month, day] = data.data.split('-');
  console.log(data);
  return (
    <R.ReviewWriteContainer>
      <R.Title>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
        <p>리뷰 작성</p>
        <CommonBtn
          name="수정"
          width="30px"
          color="rgba(0, 0, 0, 1)"
          background="rgba(217, 217, 217, 1)"
          style={{
            lineHeight: '1',
            fontSize: '10px',
            fontWeight: '400',
            padding: '3px',
          }}
          clickEvent={() => {
            getReviewIndex(2);
          }}
        />
      </R.Title>
    </R.ReviewWriteContainer>
  );
}

export default ReadReview;
