import React from 'react';
import { format } from 'date-fns';
import baseAxios from '../../../apis/baseAxios';
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

function ReadReview({ reviewData, color, closeReview, getReviewIndex }) {
  const token = localStorage.getItem('accessToken');
  const userIdx = Number(localStorage.getItem('userIdx'));

  const date = reviewData.data.createdAt
    ? format(new Date(reviewData.data.createdAt), 'yyyy.MM.dd')
    : null;

  const clickDeleteBtn = () => {
    if (window.confirm('해당 리뷰를 삭제하시겠습니까?')) {
      deleteReview();
    } else {
      return;
    }
  };
  const deleteReview = async () => {
    await baseAxios
      .delete(`map/place/cafe-reviews/${reviewData.reviewIdx}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        if (response.status === 204) {
          alert('삭제되었습니다.');
          location.reload();
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <R.ReadReviewContainer>
      <R.Title color={color}>
        <p>{reviewData.data?.title}</p>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
      </R.Title>
      <hr />
      <R.SubContentWrap>
        <R.SubContent>{reviewData.data?.keyword}</R.SubContent>
        <R.Scope>
          {[1, 2, 3, 4, 5].map((id) => (
            <ReviewStar
              key={id}
              className="reviewscope"
              id={id}
              width="16px"
              height="16px"
              fill={id <= reviewData.data?.score ? color : '#F1F1F1'}
            />
          ))}
        </R.Scope>
      </R.SubContentWrap>
      <R.UserInfoWrap>
        <R.Date>{date}</R.Date>
        <R.UserInfo>
          <p>{reviewData.data?.userInfo?.userNickname}</p>
          <img src={reviewData.data?.userInfo?.userImg} alt="user" />
        </R.UserInfo>
      </R.UserInfoWrap>
      <R.ImgWrap>
        <R.StyledSlider {...settings}>
          {reviewData.data?.imageUrls?.map((img, index) => (
            <div key={index}>
              <R.SliderImg src={img} alt="image" />
            </div>
          ))}
        </R.StyledSlider>
      </R.ImgWrap>
      <R.Content>{reviewData.data?.content}</R.Content>
      {userIdx === reviewData.data.userInfo?.userIdx ? (
        <R.UDWrap>
          <div
            onClick={() => {
              getReviewIndex(2);
            }}
          >
            수정
          </div>
          <hr />
          <div onClick={() => clickDeleteBtn()}>삭제</div>
        </R.UDWrap>
      ) : undefined}
    </R.ReadReviewContainer>
  );
}

export default ReadReview;
