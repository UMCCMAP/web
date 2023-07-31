import React, { useState } from 'react';
import styled from 'styled-components';
import SearchNavbar from './components/SearchNavbar';
import DetailSearch from './components/DetailSearch';
import Map from '../../components/Map';
import RegisterReview from './components/ReviewCRUD/RegisterReview';
import UpdateReview from './components/ReviewCRUD/UpdateReview';

function SearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [reviewItem, setReviewItem] = useState(0);
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const handleInputText = (e) => {
    setSearchText(e.target.value);
  };

  const handleReviewIndexClick = (index) => {
    setReviewItem(index);
  };

  return (
    <SearchContainer>
      <Map markerImg="src/assets/images/cmapmark.svg" />
      <SearchNavbar />
      <SearchBar className={isOpen ? 'show' : ''}>
        <div>
          <input
            type="text"
            name="searchText"
            placeholder="검색"
            value={searchText}
            onChange={handleInputText}
          />
        </div>
        <hr />
        <ul>
          <li onClick={handleDetailClick}>
            <SearchCafeImg>
              <img src="src/assets/images/example.png" alt="카페 사진" />
            </SearchCafeImg>
            <SearchCafeName>카페 이름</SearchCafeName>
            <SearchCafe>클래식한 분위기의 디저트 맛집</SearchCafe>
            <SearchCafeScore>
              <span>리뷰 21개</span>
              <hr />
              <span>평점 4.2</span>
            </SearchCafeScore>
          </li>
          <li>
            <SearchCafeImg>
              <img src="src/assets/images/example.png" alt="카페 사진" />
            </SearchCafeImg>
            <SearchCafeName>카페 이름</SearchCafeName>
            <SearchCafe>클래식한 분위기의 디저트 맛집</SearchCafe>
            <SearchCafeScore>
              <span>리뷰 21개</span>
              <hr />
              <span>평점 4.2</span>
            </SearchCafeScore>
          </li>
        </ul>
      </SearchBar>
      {!isDetailOpen ? (
        <ShowSearchBar onClick={handleClick}>
          <img
            src={
              !isOpen
                ? 'src/assets/images/openSearchbar.svg'
                : 'src/assets/images/closeSearchbar.svg'
            }
            alt="show"
          />
        </ShowSearchBar>
      ) : (
        <CloseSearchBar onClick={handleClick}></CloseSearchBar>
      )}
      <DetailSearch
        isOpen={isDetailOpen}
        closeAction={handleDetailClick}
        getReviewIndex={handleReviewIndexClick}
      />
      {reviewItem === 1 ? (
        <RegisterReview closeReview={handleReviewIndexClick} />
      ) : reviewItem === 2 ? (
        <UpdateReview closeReview={handleReviewIndexClick} />
      ) : undefined}
    </SearchContainer>
  );
}

export default SearchPage;

const SearchContainer = styled.div`
  background-color: antiquewhite;
  display: flex;
`;

const SearchBar = styled.div`
  background-color: rgba(249, 255, 253, 1);
  position: relative;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  margin: 0;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &.show {
    width: 423.5px;
    visibility: visible;
    opacity: 1;
  }
  > div {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    > input {
      width: 330px;
      border-radius: 25px;
      background-color: rgba(241, 241, 241, 1);
      border: none;
      font-size: 20px;
      font-weight: 700;
      color: rgba(147, 147, 147, 1);
      text-align: center;
      padding: 10px 20px 10px 20px;
      box-sizing: border-box;
      &:focus {
        outline: 2px solid rgba(33, 174, 33, 1);
      }
    }
  }
  > hr {
    width: 360px;
    border: 1.5px solid rgba(241, 241, 241, 1);
    margin: 0;
  }
  > ul {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > li {
      width: 305px;
      height: 245px;
    }
  }
`;

const SearchCafeImg = styled.div`
  width: 100%;
`;

const SearchCafeName = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: rgba(33, 174, 33, 1);
  margin: 15px 0;
`;

const SearchCafe = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  margin: 10px 0;
`;

const SearchCafeScore = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(147, 147, 147, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  > hr {
    height: 12px;
    border: 0.8px solid rgba(147, 147, 147, 1);
    margin: 0 10px;
  }
`;

const ShowSearchBar = styled.div`
  background-color: rgba(249, 255, 253, 1);
  width: 40px;
  height: 56px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 155px;
  cursor: pointer;
  transition: all 0.3s;
`;
const CloseSearchBar = styled.div`
  width: 0;
  opacity: 0;
`;
