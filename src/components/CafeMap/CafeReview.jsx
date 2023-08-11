import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import * as C from './styles/CafeReview.style';

function CafeReview({ data, getReviewIndex, getReviewData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <C.ReviewContainer>
      <C.ReviewItem>
        <C.ReviewContent
          isexpanded={isExpanded ? 'initial' : '4'}
          onClick={() => {
            getReviewIndex(3);
            getReviewData(data);
          }}
        >
          {data.content}
        </C.ReviewContent>
        <button onClick={handleToggleExpand}>
          {!isExpanded ? <MdKeyboardArrowDown size="25" /> : <MdKeyboardArrowUp size="25" />}
        </button>
        <C.ReviewImgWrap>
          <img src={`${data.images[0]}`} alt="리뷰 사진" />
          <div>{data.images.length}</div>
        </C.ReviewImgWrap>
      </C.ReviewItem>
      <C.ReviewWriter>
        <img src={`${data.userImg}`} alt="profile" />
        <div>
          <C.WriterName>{data.user}</C.WriterName>
          <C.WriterInfo>
            <span>{data.data}</span>
            <span>{data.visit}</span>
            <span>영수증</span>
          </C.WriterInfo>
        </div>
      </C.ReviewWriter>
    </C.ReviewContainer>
  );
}

export default CafeReview;
