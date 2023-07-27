import Header from '../../components/Header';
import { styled } from 'styled-components';
import Button from '../../components/Button';
import Line from '../../components/Line';
import LocationImg from '../../assets/icon/locationIcon.png';
import { useState } from 'react';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const ContentsWrap = styled.div`
  width: 67rem;
  height: 90rem;
  display: flex;
  align-items: center;

  flex-direction: column;
`;
const BoardContentsWrap = styled.div`
  width: 58rem;
  height: 100%;
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
  width: 15%;
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
  height: auto;
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
const CafeIcon = styled.div``;
function BoardView() {
  const [board] = useState({
    themes: ['추천해요', '한강 뷰', '조용한', '빵 맛집', '주차관리'],
    title: '성수동 카페 뷰 맛집!',
    date: '23/07.10',
    user: 'User',
    cafeName: '성수 RSG',
    content: '',
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
    <Wrap>
      <ContentsWrap>
        <Header />
        <BoardContentsWrap>
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
        </BoardContentsWrap>
      </ContentsWrap>
    </Wrap>
  );
}
export default BoardView;
