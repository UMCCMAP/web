import React, { useState } from 'react';
import ReadReview from './MapReview/ReadReview';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import * as C from './styles/CafeReview.style';

function CafeReview({ data, closeAction, getReviewIndex, getUpdateReview, setClickReviewItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModalClick = () => {
    setReviewModalOpen(false);
  };

  return (
    <C.ReviewContainer>
      <C.ReviewItem>
        <C.ReviewContent
          isexpanded={isExpanded ? 'initial' : '4'}
          onClick={() => {
            closeAction();
            setReviewModalOpen(true);
            setClickReviewItem(true);
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
      {reviewModalOpen && (
        <ReadReview
          closeAction={handleModalClick}
          getReviewIndex={getReviewIndex}
          setClickReviewItem={setClickReviewItem}
          getUpdateReview={getUpdateReview}
          data={data}
        />
      )}
    </C.ReviewContainer>
  );
}

export default CafeReview;
