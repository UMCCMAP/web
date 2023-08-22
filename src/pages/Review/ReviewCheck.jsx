import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/LogoHeader';
import Next from './assets/NextIcon.png';
import Prev from './assets/PrevIcon.png';
import Select from './assets/SearchSelect.png';
import Search from '../../assets/HomepageIcon/SearchLogo.png';
import Review from './dummy/Review';
import * as S from '../../styles/Reviewcheckpage.style';
import * as W from '../../styles/Wapper.style';

function ReviewCheck() {
  const username = '닉네임';
  const ITEMS_EACH_PAGE = 3; // 한 페이지당 리뷰개수
  const PAGE_NUM = 9; // 페이지넘버 개수

  const pageCnt = Math.ceil(Review.length / ITEMS_EACH_PAGE); // 총 페이지 개수

  const [currentPage, setCurrentPage] = useState(1); // 페이지 바꿔

  const isNextBtn = Math.floor((currentPage - 1) / PAGE_NUM) === Math.floor(pageCnt / PAGE_NUM); // Can I press '>" Btn?"
  const isPrevBtn = Math.floor((currentPage - 1) / PAGE_NUM) === 0;

  const handlerNextPg = () => {
    setCurrentPage((current) => PAGE_NUM * Math.floor((current + PAGE_NUM - 1) / PAGE_NUM) + 1);
  };
  const handlerPrevPg = () => {
    setCurrentPage((current) => PAGE_NUM * Math.floor((current - PAGE_NUM - 1) / PAGE_NUM) + 1);
  };
  const getCurrentPageCafes = () => {
    // 페이지 내 카페
    const startIdx = (currentPage - 1) * ITEMS_EACH_PAGE;
    const endIdx = startIdx + ITEMS_EACH_PAGE;
    return Review.slice(startIdx, endIdx);
  };

  const renderPageBtnList = () => {
    const pageList = []; // 페이지 버튼 넣을 리스트
    const firstNum =
      currentPage <= PAGE_NUM ? 1 : Math.floor((currentPage - 1) / PAGE_NUM) * PAGE_NUM + 1;
    const lastNum = Math.min(firstNum + PAGE_NUM - 1, pageCnt);

    for (let i = firstNum; i <= lastNum; i++) {
      pageList.push(
        <S.PageNum
          key={i}
          onClick={() => setCurrentPage(i)}
          weight={i === currentPage ? '700' : '300'}
        >
          {i}
        </S.PageNum>,
      );
    }
    return pageList;
  };

  return (
    <W.LongWrapper height="1422px">
      <Logo></Logo>
      <S.Title>{username}'s 리뷰</S.Title>
      <S.SortDiv>
        <S.SortText>정렬</S.SortText>
        <S.SortBtnDiv>
          <div>날짜순</div>
          <img
            src={Select}
            alt="select"
            style={{ width: '17px', height: '17px', cursor: 'pointer' }}
          />
        </S.SortBtnDiv>
      </S.SortDiv>
      <S.WritingDiv>
        <S.WritingAll>
          <S.CafeName>카페 이름</S.CafeName>
          <S.Wrting>
            <S.ReviewContent>글 미리보기</S.ReviewContent>
            <S.ReviewImgDiv backgroundImg={Imgs}></S.ReviewImgDiv>
          </S.Wrting>
        </S.WritingAll>
      </S.WritingDiv>
      <S.PageNumberListDiv>
        <S.PageNumberList>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </S.PageNumberList>
        <S.NextOrSearchBtn>
          <img src={Next} alt="next" />
        </S.NextOrSearchBtn>
      </S.PageNumberListDiv>
      <S.ReviewSearchDiv>
        <S.SelectDiv>
          <div>카페이름</div>
          <button>
            <img src={Select} alt="select" />
          </button>
        </S.SelectDiv>
        <input type="text"></input>
        <S.NextOrSearchBtn>
          <img src={Search} alt="search" style={{ width: '24px', height: '24px' }} />
        </S.NextOrSearchBtn>
      </S.ReviewSearchDiv>
      <Footer></Footer>
    </W.LongWrapper>
  );
}

export default ReviewCheck;
