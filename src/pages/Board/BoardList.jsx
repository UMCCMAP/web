import React, { useState, useEffect } from 'react';

import Button from '@/components/Button';
import WriteImg from '@/assets/icon/Vector.png';
import Header from '@/components/Header';
import Footer from './components/Footer';
import * as C from './styles/Common.style';
import baseAxios from '@/apis/baseAxios';
import { useNavigate, useLocation } from 'react-router-dom';
import * as B from './styles/BoardList.style';

function BoardList() {
  const [keyWords, setKeyWords] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const PAGE_RANGE_DISPLAY = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [pageCount, setPageCount] = useState(5);
  const [search, setSearch] = useState({
    page: currentPage,
    searchType: location.state ? (location.state.writer ? '작성자' : '카페') : '카페',
    keyword: location.state ? location.state.writer || location.state.cafe || '' : '',
  });
  const handleButtonClick = (theme) => {
    setActiveButton(
      (prevActive) =>
        prevActive.includes(theme)
          ? prevActive.filter((item) => item !== theme) // 이미 선택된 테마라면 제거
          : [...prevActive, theme], // 선택되지 않은 테마라면 추가
    );
    setCurrentPage(1);
    setSearch((prevSearch) => ({
      ...prevSearch,
      keyword: '',
    }));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => 5 * Math.floor((prevPage + PAGE_RANGE_DISPLAY - 1) / 5) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => 5 * Math.floor((prevPage - PAGE_RANGE_DISPLAY - 1) / 5) + 5);
  };

  const isNextDisabled =
    Math.floor((currentPage - 1) / PAGE_RANGE_DISPLAY) ===
    Math.floor((pageCount - 1) / PAGE_RANGE_DISPLAY);

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
        <B.PageNum
          key={i}
          onClick={() => setCurrentPage(i)}
          color={i === currentPage ? '#000000' : '#A0A0A0'}
        >
          {i}
        </B.PageNum>,
      );
    }

    return pageButtons;
  };
  async function fetchData(activeButton, currentPage, search) {
    try {
      const tagIdx = activeButton.join(','); // 배열의 요소를 문자열로 추출하고 쉼표로 구분하여 저장

      // 쿼리 파라미터를 문자열로 만들기
      let queryParams = new URLSearchParams({
        tagIdx: tagIdx,
        page: (currentPage - 1).toString(),
      }).toString();

      // 백엔드 URL 생성
      let backendUrl = '/board';
      if (search.keyword !== '') {
        backendUrl = '/board/search';
        let searchTypeMapping = {
          카페: 'cafe',
          작성자: 'writer',
          제목: 'title-content',
        };

        let transformedSearchType = searchTypeMapping[search.searchType] || search.searchType;
        queryParams = new URLSearchParams({
          // tagIdx: tagIdx,

          page: (currentPage - 1).toString(),
          searchType: transformedSearchType,
          keyword: search.keyword,
        }).toString();
      }

      backendUrl += `?${queryParams}`;
      console.log(backendUrl);
      // 요청 보내기
      const response = await baseAxios.get(backendUrl);
      setCurrentData(response.data.result.boardResponses.content);
      setKeyWords(response.data.result.tagNames);
      setPageCount(response.data.result.boardResponses.totalPages);
      console.log(response.data);
      // ... 데이터를 활용한 작업
    } catch (error) {
      console.error('데이터 요청 중 오류 발생:', error);
      console.log(error.data);
      setCurrentData([]);
    }
  }
  // HTML 태그를 제거하는 함수
  const removeHtmlTags = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.textContent || div.innerText || '';
  };

  // fetchData 함수 호출
  useEffect(() => {
    console.log(search);
    console.log(currentPage);
    fetchData(activeButton, currentPage, search);
  }, [activeButton, currentPage, search]);

  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header name="검색" value={search} set={setSearch} />
        <B.BoardWrap>
          <B.BoardKeywordWrap>
            <B.BoardKeyWords>
              {keyWords.map((a) => (
                <Button
                  key={a.tagIdx}
                  background={activeButton.includes(a.tagIdx) ? '#FF6868' : '#F1F1F1'}
                  color={activeButton.includes(a.tagIdx) ? '#F1F1F1' : '#373737'}
                  name={a.tagName}
                  clickHandler={() => handleButtonClick(a.tagIdx)}
                  width="80px"
                  height="30px"
                  font="13px"
                ></Button>
              ))}
            </B.BoardKeyWords>
            <B.BoardWriteButton
              onClick={() => {
                navigate('/board/write', {
                  state: keyWords,
                });
              }}
            >
              <img src={WriteImg} alt="logo image" />
              <B.WriteText>글쓰기</B.WriteText>
            </B.BoardWriteButton>
          </B.BoardKeywordWrap>
          <B.BoardContentsWrap>
            {currentData.length > 0 ? (
              currentData.map((a) => (
                <B.Board
                  onClick={() => {
                    navigate(`/board/${a.idx}`, {
                      state: keyWords,
                    });
                  }}
                  key={a.idx}
                >
                  <B.BoardWords>
                    <B.Title>{a.boardTitle}</B.Title>
                    <B.Content>{removeHtmlTags(a.boardContent)}</B.Content>
                    <B.Themes>
                      {Object.values(a.tagList).map((obj) => {
                        const tag = Object.values(obj)[0];
                        return (
                          <Button
                            key={tag}
                            width="80px"
                            height="30px"
                            background="#f1f1f1"
                            font="13px"
                            name={tag}
                          ></Button>
                        );
                      })}
                    </B.Themes>
                  </B.BoardWords>
                  <B.BoardImagesWrap>
                    {Object.values(a.imgList).map((a) => (
                      <B.BoardImage key={a} background={a}></B.BoardImage>
                    ))}
                  </B.BoardImagesWrap>
                </B.Board>
              ))
            ) : (
              <B.NoDataWrap>게시물이 없습니다. ㅠㅠ</B.NoDataWrap>
            )}
          </B.BoardContentsWrap>
        </B.BoardWrap>
        <B.PageButtons>
          {!isPrevDisabled && (
            <B.PageMoveButton
              onClick={() => {
                handlePrevPage();
              }}
            >
              {'<'}
            </B.PageMoveButton>
          )}
          <B.PageNums>{renderPageButtons()}</B.PageNums>
          {!isNextDisabled && (
            <B.PageMoveButton
              onClick={() => {
                handleNextPage();
              }}
            >
              {'>'}
            </B.PageMoveButton>
          )}
        </B.PageButtons>
      </C.ContentsWrap>

      <Footer />
    </C.Wrap>
  );
}
export default BoardList;
