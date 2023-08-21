import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { format } from 'date-fns';
import * as C from './styles/CafeReview.style';
import baseAxios from '@/apis/baseAxios';

function CafeReview({ data, getReviewIndex, getReviewData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const date = data.createdAt ? format(new Date(data.createdAt), 'yyyy.MM.dd') : null;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getReviewItem = async () => {
    try {
      const response = await baseAxios.get(`map/place/cafe-reviews/${data.idx}`);
      getReviewData({
        reviewIdx: data.idx,
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <C.ReviewContainer>
      <C.ReviewItem>
        <C.ReviewContent
          isexpanded={isExpanded ? 'initial' : '4'}
          onClick={() => {
            getReviewIndex(3);
            getReviewItem();
          }}
        >
          {data?.content}
        </C.ReviewContent>
        <button onClick={handleToggleExpand}>
          {!isExpanded ? <MdKeyboardArrowDown size="25" /> : <MdKeyboardArrowUp size="25" />}
        </button>
        <C.ReviewImgWrap>
          <img src={`${data?.imageUrl}`} alt="리뷰 사진" />
          <div>{data?.imageCnt}</div>
        </C.ReviewImgWrap>
      </C.ReviewItem>
      <C.ReviewWriter>
        <img src={`${data?.userInfo?.userImg}`} alt="profile" />
        <div>
          <C.WriterName>{data?.userInfo?.userNickname}</C.WriterName>
          <C.WriterInfo>
            <span>{date}</span>
          </C.WriterInfo>
        </div>
      </C.ReviewWriter>
    </C.ReviewContainer>
  );
}

export default CafeReview;
