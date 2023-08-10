import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../../components/Button';
import WriteImg from '../../assets/icon/Vector.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as C from './styles/Common.style';
import boards from './dummy/Boards';
const BoardWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 10px;
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
  height: fit-content;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
`;
const Board = styled.div`
  display: flex;
  height: 15rem;
  margin-top: 30px;
  cursor: pointer;
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
const Themes = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
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
  background-color: #f1f1f1;
  border-radius: 32px;
  background-image: url('${(props) => props.background}');
  background-size: cover;
  transition: transform 0.3s ease; /* 부드러운 애니메이션 효과를 추가합니다. */

  &:hover {
    transform: scale(1.2); /* 마우스를 올렸을 때 이미지 크기를 1.2배로 확대합니다. */
  }
`;
const PageButtons = styled.div`
  width: 150px;
  height: 20px;
  margin-top: 43px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
`;
const PageNums = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
`;
const PageNum = styled.div`
  width: calc(100% / 5);
  text-align: center;
  flex: 1;
  cursor: pointer;
  color: ${(props) => props.color};
`;
const PageMoveButton = styled.div`
  width: 15%;
  cursor: pointer;
  text-align: center;
`;
function BoardList() {
  const [keyWords] = useState([
    '질문해요',
    '추천해요',
    '디저트',
    '파스타',
    '드립커피',
    '음료',
    'CMAP',
  ]);

  const ITEMS_PER_PAGE = 5;
  const PAGE_RANGE_DISPLAY = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 해당하는 카페들을 가져오는 함수
  const getCurrentPageCafes = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return boards.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => 5 * Math.floor((prevPage + PAGE_RANGE_DISPLAY - 1) / 5) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => 5 * Math.floor((prevPage - PAGE_RANGE_DISPLAY - 1) / 5) + 1);
  };

  const pageCount = Math.ceil(boards.length / ITEMS_PER_PAGE);

  const isNextDisabled =
    Math.floor((currentPage - 1) / PAGE_RANGE_DISPLAY) ===
    Math.floor(pageCount / PAGE_RANGE_DISPLAY);

  const isPrevDisabled = Math.floor((currentPage - 1) / PAGE_RANGE_DISPLAY) === 0;

  const renderPageButtons = () => {
    const pageButtons = [];
    const startPage =
      currentPage <= PAGE_RANGE_DISPLAY
        ? 1
        : Math.floor((currentPage - 1) / PAGE_RANGE_DISPLAY) * PAGE_RANGE_DISPLAY + 1;

    const endPage = Math.min(startPage + PAGE_RANGE_DISPLAY - 1, pageCount);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PageNum
          key={i}
          onClick={() => setCurrentPage(i)}
          color={i === currentPage ? '#000000' : '#A0A0A0'}
        >
          {i}
        </PageNum>,
      );
    }

    return pageButtons;
  };

  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header name="검색" />
        <BoardWrap>
          <BoardKeywordWrap>
            <BoardKeyWords>
              {keyWords.map((a) => (
                <Button
                  key={a}
                  name={a}
                  width="80px"
                  height="30px"
                  background="#f1f1f1"
                  font="13px"
                ></Button>
              ))}
            </BoardKeyWords>
            <BoardWriteButton>
              <img src={WriteImg} alt="logo image" />
              <WriteText>글쓰기</WriteText>
            </BoardWriteButton>
          </BoardKeywordWrap>

          <BoardContentsWrap>
            {getCurrentPageCafes().map((a, i) => (
              <Board key={i}>
                <BoardWords>
                  <Title>{a.title}</Title>
                  <Content>{a.content}</Content>
                  <Themes>
                    {a.theme.map((a) => (
                      <Button
                        key={a}
                        width="80px"
                        height="30px"
                        bacground="#f1f1f1"
                        font="13px"
                        name={a}
                      ></Button>
                    ))}
                  </Themes>
                </BoardWords>
                <BoardImagesWrap>
                  {a.image.map((a) => (
                    <BoardImage key={a} background={a}></BoardImage>
                  ))}
                </BoardImagesWrap>
              </Board>
            ))}
          </BoardContentsWrap>
        </BoardWrap>

        <PageButtons>
          {!isPrevDisabled && (
            <PageMoveButton
              onClick={() => {
                handlePrevPage();
              }}
            >
              {'<'}
            </PageMoveButton>
          )}
          <PageNums>{renderPageButtons()}</PageNums>
          {!isNextDisabled && (
            <PageMoveButton
              onClick={() => {
                handleNextPage();
              }}
            >
              {'>'}
            </PageMoveButton>
          )}
        </PageButtons>
      </C.ContentsWrap>

      <Footer />
    </C.Wrap>
  );
}
export default BoardList;
