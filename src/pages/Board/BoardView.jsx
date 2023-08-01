import Header from '../../components/Header';
import { styled } from 'styled-components';
import Button from '../../components/Button';
import Line from '../../components/Line';
import LocationImg from '../../assets/icon/locationIcon.png';
import { useState } from 'react';
import tempImg from '../../assets/temp/tempcafeimg2.png';
import tempImg2 from '../../assets/temp/tempcafeimg.jpg';
import reviewIcon from '../../assets/icon/reviewIcon.png';
import reviewHeart from '../../assets/icon/reviewHeart.png';
import Footer from '../../components/Footer';
import * as C from '../../styles/Common.style';
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const ContentsWrap = styled.div`
  width: 67rem;
  height: fit-content;
  display: flex;
  align-items: center;

  flex-direction: column;
  margin-bottom: 260px;
`;
const BoardWrap = styled.div`
  width: 58rem;
  height: fit-content;
  margin-top: 45px;
`;
const ButtonsWrap = styled.div`
  width: 30rem;
  display: flex;
  gap: 15px;
`;
const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 16px;
  align-items: flex-end;
  justify-content: space-between;
`;
const BoardTitle = styled.div`
  width: 50%;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  height: 54%;
`;
const InfoWrap = styled.div`
  width: 20%;
  height: 54%;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  width: 60%;
  height: 100%;
  text-align: right;
  color: #939393;
`;
const Date = styled.div`
  width: 100%;
  height: 50%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
`;
const User = styled.div`
  width: 100%;
  height: 50%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;
const Icon = styled.div`
  width: 33%;
  padding-bottom: 32%;
  border-radius: 100%;
  background-color: #d9d9d9;
`;
const CafeTitle = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: 26px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 32px;
  gap: 7px;
  background-color: #f1f1f1;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #939393;
`;
const BoardContentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-bottom: 360px;
`;
const BoardContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
`;
const Word = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-top: 45px;
  margin-bottom: 45px;
`;
const BoardImg = styled.div`
  width: 100%;
`;
const ReviewWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ReviewInfo = styled.div`
  width: fit-content;
  gap: 5px;
  height: 2.5rem;
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

const ReviewIconWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 8px;
`;
const ReviewNumber = styled.div`
  width: 50%;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.color};
`;
const ReviewContentsWrap = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 16px;
`;
const Review = styled.div`
  margin-top: 40px;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  display: flex;
  gap: 16px;
`;
const ReviewContentsUserWrap = styled.div`
  height: 72px;
  width: 160px;
  display: flex;
`;
const ReviewDate = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const ReviewUser = styled.div`
  width: 100%;
  color: black;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const ReviewUserInfo = styled.div`
  width: 60%;
  height: 100%;
  text-align: left;
  color: #939393;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ReviewContent = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const CafeIcon = styled.div``;
function BoardView() {
  const [board] = useState({
    themes: ['추천해요', '한강 뷰', '조용한', '빵 맛집', '주차관리'],
    title: '성수동 카페 뷰 맛집!',
    date: '23/07.10',
    user: 'User',
    cafeName: '성수 RSG',
    content: [
      {
        content:
          '오늘 방문한 성수동에 OOO 카페입니다.\n\n아침 운동 후 출출해서 그냥 들어갔는데 생각보다 깔끔한 인테리어..\n첫 인상은 합격입니다...ㅎㅎ\n',
        image: `${tempImg}`,
      },
      {
        content: '메뉴가 생각보다 많아요!\n암튼 전 콜드브루 성애자라서 콜드브루 겟겟',
        image: `${tempImg2}`,
      },
    ],
    heart: 3,
    review: [
      {
        user: 'USER',
        date: '23/07/12',
        content: '오..주차가 편리해서 좋은 것 같아요! 좋은 정보 감사합니다! 좋아요 누르고 가요~',
      },
      {
        user: 'Alice',
        date: '23/08/05',
        content: '맛도 좋고 분위기도 좋아요. 다음에 또 방문하고 싶습니다.',
      },
      {
        user: 'Bob',
        date: '23/08/15',
        content: '서비스가 친절하고 가격도 저렴해서 매우 만족했습니다.',
      },
      {
        user: 'Charlie',
        date: '23/09/01',
        content: '디저트가 정말 맛있어요. 특히 초콜릿 케이크가 최고입니다!',
      },
      {
        user: 'Eve',
        date: '23/09/10',
        content: '파스타가 진짜 맛있어요. 이탈리아에서 먹은 것 같은 느낌!',
      },
    ],
  });
  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header />
        <BoardWrap>
          <ButtonsWrap>
            {board.themes.map((a) => {
              return <Button key={a} width="5rem" height="2rem" name={a} />;
            })}
          </ButtonsWrap>
          <TitleWrap>
            <BoardTitle>{board.title}</BoardTitle>
            <InfoWrap>
              <Info>
                <Date>{board.date}</Date>
                <User>{board.user}</User>
              </Info>
              <Icon></Icon>
            </InfoWrap>
          </TitleWrap>
          <Line top="26"></Line>

          <CafeTitle>
            <CafeIcon>
              <img src={LocationImg} />
            </CafeIcon>
            {board.cafeName}
          </CafeTitle>
          <BoardContentsWrap>
            {board.content.map((post, index) => (
              <BoardContent key={index}>
                <Word>
                  {/* 내용을 split으로 나누어 배열의 요소들로 분리, 그 map으로 순회하며 br삽입 */}
                  {post.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Word>
                <BoardImg>
                  {post.image && <img width="100%" src={`${post.image}`} alt={`게시물 ${index}`} />}
                </BoardImg>
              </BoardContent>
            ))}
          </BoardContentsWrap>
          <ReviewWrap>
            <ReviewInfo>
              <ReviewIconWrap>
                <img src={reviewHeart} />
                <ReviewNumber color="#FF6868">{board.heart}</ReviewNumber>
              </ReviewIconWrap>

              <ReviewIconWrap>
                <img src={reviewIcon} />
                <ReviewNumber color="#60A7E1">{board.review.length}</ReviewNumber>
              </ReviewIconWrap>
            </ReviewInfo>
            <Line top="8"></Line>
            <ReviewContentsWrap>
              {board.review.map((a, i) => (
                <Review key={i}>
                  <InfoWrap>
                    <Icon></Icon>
                    <ReviewUserInfo>
                      <ReviewUser>{a.user}</ReviewUser>
                      <ReviewDate>{a.date}</ReviewDate>
                    </ReviewUserInfo>
                  </InfoWrap>
                  <ReviewContent>{a.content}</ReviewContent>
                </Review>
              ))}
            </ReviewContentsWrap>
          </ReviewWrap>
        </BoardWrap>
      </C.ContentsWrap>
      <Footer top="260px" />
    </C.Wrap>
  );
}
export default BoardView;
