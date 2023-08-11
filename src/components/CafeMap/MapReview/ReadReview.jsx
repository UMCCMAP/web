import React from 'react';
import * as R from './styles/ReadReview.style';
import { ReactComponent as ReviewStar } from '../../../assets/images/reviewstar.svg';
import CommonBtn from '../../CommonBtn';

function ReadReview({ data, color, closeReview, getReviewIndex }) {
  const [year, month, day] = data.data.split('-');

  return (
    <R.ReadReviewContainer>
      <R.Title color={color}>
        <p>{data.title}</p>
        <img src="src/assets/images/close.svg" alt="close" onClick={() => closeReview(0)} />
      </R.Title>
      <hr />
      <R.SubContentWrap>
        <R.SubContent>{data.subContent}</R.SubContent>
        <R.Scope>
          {[1, 2, 3, 4, 5].map((id) => (
            <ReviewStar
              key={id}
              className="reviewscope"
              id={id}
              width="16px"
              height="16px"
              fill={id <= data.scope ? color : '#F1F1F1'}
            />
          ))}
        </R.Scope>
      </R.SubContentWrap>
      <R.UserInfoWrap>
        <R.Date>
          {year}.{month}.{day}
        </R.Date>
        <R.UserInfo>
          <p>{data.user}</p>
          <img src={data.userImg} alt="user" />
        </R.UserInfo>
      </R.UserInfoWrap>
      <R.ImgWrap>
        <img src={data.images[0]} alt="image" />
      </R.ImgWrap>
      <R.Content>{data.content}</R.Content>
    </R.ReadReviewContainer>
  );
}

export default ReadReview;
{
  /* <CommonBtn
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
/> */
}
