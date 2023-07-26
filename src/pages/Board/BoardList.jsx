import React, { useState } from 'react';
import { styled } from 'styled-components';

import WriteImg from '../../assets/icon/Vector.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

const BoardWrap = styled.div`
  width: 100%;
  height: 80rem;
`;
const BoardKeywordWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BoardKeyWords = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2px;
  gap: 10px;
`;
const BoardKeyWordsButton = styled.div`
  width: 65px;
  height: 24px;
  padding: 4px 10px 4px 10px;
  border-radius: 16px;
  gap: 10px;
  background-color: #f1f1f1;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  cursor: pointer;
`;
const BoardWriteButton = styled.div`
  background: #60a7e1;
  width: 108px;
  height: 41px;
  padding: 10px 16px 10px 16px;
  border-radius: 32px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const WriteText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  color: white;
`;
const BoardContentsWrap = styled.div`
  height: 70rem;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
`;
const Board = styled.div`
  display: flex;
  height: 15rem;
  margin-top: 30px;
`;
const BoardWords = styled.div`
  width: 48%;
  height: 100%;
`;
const Title = styled.div`
  height: 3rem;
  font-family: Pretendard;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const Content = styled.div`
  height: 9rem;
  display: flex;
  align-items: center;
  line-height: 15px;
`;
const BoardImagesWrap = styled.div`
  width: 52%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-start;
`;
const BoardImage = styled.div`
  width: 10rem;
  height: 10rem;
  background: #f1f1f1;
  border-radius: 32px;
`;
function BoardList() {
  const [keyWords, setKeyWords] = useState([
    '질문해요',
    '추천해요',
    '디저트',
    '파스타',
    '드립커피',
    '음료',
    'CMAP',
  ]);
  const [cafes, setCafes] = useState([
    {
      title: '성수동 카페 뷰맛집!',
      content:
        '오늘 날이 좋아서 성수동에 카페를 가보았습니다! 막 들어간 카페 치고 뷰가 너무 좋더라구요 석양이 딱 보이는 위치고 디저트도 너무 맛있어요!!',
      recommand: true,
      image: ['a', 'b', 'c'],
    },
    {
      title: '한강 근처 브런치 카페 추천',
      content:
        '한강 산책하다가 배가 고파져서 잠원 근처에 브런치 폭풍 검색..그리고 들어간 카페인데 가격도 괜찮고 맛있네요.. 다음에 또 올게요!',
      recommand: true,
      image: ['b', 'c'],
    },
    {
      title: '서초 근교에 주차 편리한 카페',
      content: '서초 근교에 주차 편리하고 넓은 카페 있을까요?',
      recommand: false,
      image: ['a', 'b', 'c'],
    },
    {
      title: '서초 근교에 주차 편리한 카페',
      content: '서초 근교에 주차 편리하고 넓은 카페 있을까요?',
      recommand: false,
      image: ['a', 'b', 'c'],
    },
  ]);
  return (
    <Wrap>
      <ContentsWrap>
        <Header name="검색" />
        <BoardWrap>
          <BoardKeywordWrap>
            <BoardKeyWords>
              {keyWords.map((a) => (
                <BoardKeyWordsButton key={a}>{a}</BoardKeyWordsButton>
              ))}
            </BoardKeyWords>
            <BoardWriteButton>
              <img src={WriteImg} alt="logo image" />
              <WriteText>글쓰기</WriteText>
            </BoardWriteButton>
          </BoardKeywordWrap>
          <BoardContentsWrap>
            {cafes.map((a) => (
              <Board key={a}>
                <BoardWords>
                  <Title>{a.title}</Title>
                  <Content>{a.content}</Content>
                  <BoardKeyWordsButton>{a.recommand ? '추천해요' : '질문해요'}</BoardKeyWordsButton>
                </BoardWords>
                <BoardImagesWrap>
                  {a.image.map((a) => (
                    <BoardImage key={a}>
                      {a}
                      <img src={a} />
                    </BoardImage>
                  ))}
                </BoardImagesWrap>
              </Board>
            ))}
          </BoardContentsWrap>
        </BoardWrap>
      </ContentsWrap>

      <Footer />
    </Wrap>
  );
}
export default BoardList;
