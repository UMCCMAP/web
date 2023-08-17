import React from 'react';
import { format } from 'date-fns';
import * as R from './styles/ReadReview.style';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';
import { ReactComponent as Next } from '../../../assets/images/next.svg';
import { ReactComponent as Prev } from '../../../assets/images/prev.svg';
// import CommonBtn from '../../CommonBtn';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <R.ArrowNextDiv>
      <Next />
    </R.ArrowNextDiv>
  ),
  prevArrow: (
    <R.ArrowPrevDiv>
      <Prev />
    </R.ArrowPrevDiv>
  ),
};

function ReadReview({ data, color, closeReview, getReviewIndex }) {
  const date = data.createdAt ? format(new Date(data.createdAt), 'yyyy.MM.dd') : null;

  return (
    <R.ReadReviewContainer>
      <R.Title color={color}>
        <p>{data?.title}</p>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
      </R.Title>
      <hr />
      <R.SubContentWrap>
        <R.SubContent>{data?.keyword}</R.SubContent>
        <R.Scope>
          {[1, 2, 3, 4, 5].map((id) => (
            <ReviewStar
              key={id}
              className="reviewscope"
              id={id}
              width="16px"
              height="16px"
              fill={id <= data?.score ? color : '#F1F1F1'}
            />
          ))}
        </R.Scope>
      </R.SubContentWrap>
      <R.UserInfoWrap>
        <R.Date>{date}</R.Date>
        <R.UserInfo>
          <p>{data?.userInfo?.userNickname}</p>
          <img src={data?.userInfo?.userImg} alt="user" />
        </R.UserInfo>
      </R.UserInfoWrap>
      <R.ImgWrap>
        <R.StyledSlider {...settings}>
          {data?.imageUrls?.map((img, index) => (
            <div key={index}>
              <R.SliderImg src={img} alt="image" />
            </div>
          ))}
        </R.StyledSlider>
      </R.ImgWrap>
      <R.Content>{data?.content}</R.Content>
      <R.UDWrap>
        <div
          onClick={() => {
            getReviewIndex(2);
          }}
        >
          수정
        </div>
        <hr />
        <div>삭제</div>
      </R.UDWrap>
    </R.ReadReviewContainer>
  );
}

export default ReadReview;
