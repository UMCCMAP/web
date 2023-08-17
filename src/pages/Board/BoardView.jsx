import Header from '../../components/Header';
import Button from '../../components/Button';
import LocationImg from '../../assets/icon/locationIcon.png';
import { useState } from 'react';
import Footer from './components/Footer';
import * as C from './styles/Common.style';
import reviewIcon from '../../assets/icon/reviewIcon.png';
import reviewHeart from '../../assets/icon/reviewHeart.png';
import BoardViewData from './dummy/BoardViewData';
import * as B from './styles/BoardViews.style';

function BoardView() {
  const [review, setReview] = useState('');
  const handleClick = () => {
    console.log(review);
  };
  const handleTextareaChange = (event) => {
    setReview(event.target.value);
  };
  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header />
        <B.BoardWrap>
          <B.ButtonsWrap>
            {BoardViewData.themes.map((a) => {
              return <Button key={a} width="5rem" height="2rem" name={a} />;
            })}
          </B.ButtonsWrap>
          <B.TitleWrap>
            <B.BoardTitle>{BoardViewData.title}</B.BoardTitle>
            <B.InfoWrap>
              <B.Info>
                <B.Date>{BoardViewData.date}</B.Date>
                <B.User>{BoardViewData.user}</B.User>
              </B.Info>
              <B.Icon></B.Icon>
            </B.InfoWrap>
          </B.TitleWrap>
          <C.Line top="26"></C.Line>

          <B.CafeTitle>
            <B.CafeIcon>
              <img src={LocationImg} />
            </B.CafeIcon>
            {BoardViewData.cafeName}
          </B.CafeTitle>
          <B.BoardContentsWrap>
            {BoardViewData.content.map((post, index) => (
              <B.BoardContent key={index}>
                <B.Word>
                  {/* 내용을 split으로 나누어 배열의 요소들로 분리, 그 map으로 순회하며 br삽입 */}
                  {post.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </B.Word>
                <B.BoardImg>
                  {post.image && <img width="100%" src={`${post.image}`} alt={`게시물 ${index}`} />}
                </B.BoardImg>
              </B.BoardContent>
            ))}
          </B.BoardContentsWrap>
          <B.ReviewWrap>
            <B.ReviewInfoWrap>
              <B.ReviewInfo>
                <B.ReviewIconWrap>
                  <img src={reviewHeart} />
                  <B.ReviewNumber color="#FF6868">{BoardViewData.heart}</B.ReviewNumber>
                </B.ReviewIconWrap>

                <B.ReviewIconWrap>
                  <img src={reviewIcon} />
                  <B.ReviewNumber color="#60A7E1">{BoardViewData.review.length}</B.ReviewNumber>
                </B.ReviewIconWrap>
              </B.ReviewInfo>
            </B.ReviewInfoWrap>
            <C.Line top="8"></C.Line>
            <B.ReviewContentsWrap>
              {BoardViewData.review.map((a, i) => (
                <B.Review key={i}>
                  <B.InfoWrap>
                    <B.Icon></B.Icon>
                    <B.ReviewUserInfo>
                      <B.ReviewUser>{a.user}</B.ReviewUser>
                      <B.ReviewDate>{a.date}</B.ReviewDate>
                    </B.ReviewUserInfo>
                  </B.InfoWrap>
                  <B.ReviewContent>{a.content}</B.ReviewContent>
                </B.Review>
              ))}
            </B.ReviewContentsWrap>
            <C.Line top="40" />
            <B.ReviewWriteWrap>
              <B.WriteUser>UserName</B.WriteUser>
              <B.WriteText
                value={review}
                onChange={handleTextareaChange}
                placeholder="댓글을 입력하세요"
              ></B.WriteText>
              <B.WriteButton
                onClick={() => {
                  handleClick();
                }}
              >
                등록
              </B.WriteButton>
            </B.ReviewWriteWrap>
          </B.ReviewWrap>
        </B.BoardWrap>
      </C.ContentsWrap>
      <Footer top="40px" />
    </C.Wrap>
  );
}
export default BoardView;
