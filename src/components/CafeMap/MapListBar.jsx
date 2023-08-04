import React, { useState } from 'react';
import styled from 'styled-components';
import MapCafeDetail from './MapCafeDetail';
import RegisterReview from './MapReview/RegisterReview';
import UpdateReview from './MapReview/UpdateReview';
import { ReactComponent as Open } from '../../assets/images/openSearchbar.svg';
import { ReactComponent as Close } from '../../assets/images/closeSearchbar.svg';
import search from '../../pages/dummy/Search';

function MapListBar({ pos, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState(0);
  const [reviewRU, setReviewRU] = useState(0);
  const [updateReviewData, setUpdateReviewData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleInputText = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailClick = () => {
    setDetailId(0);
  };

  const handleReviewIndexClick = (index) => {
    setReviewRU(index);
  };

  const handleUpdateReviewData = (data) => {
    setUpdateReviewData(data);
  };
  return (
    <>
      <SearchBarContainer className={isOpen && reviewRU !== 1 && reviewRU !== 2 ? 'show' : ''}>
        <div>
          <SearchInput
            type="text"
            name="searchText"
            placeholder="검색"
            color={color}
            value={searchText}
            onChange={handleInputText}
          />
        </div>
        <hr />
        <ul>
          {search.map((data, index) => (
            <li key={index} onClick={() => setDetailId(data.id)}>
              <SearchCafeImg>
                <img src={data.images[0]} alt="카페 사진" />
              </SearchCafeImg>
              <SearchCafeName color={color}>{data.title}</SearchCafeName>
              <SearchCafe>{data.info}</SearchCafe>
              <SearchCafeScore>
                <span>리뷰 {data.reviews.length}개</span>
                <hr />
                <span>평점 {data.scope}</span>
              </SearchCafeScore>
            </li>
          ))}
        </ul>
      </SearchBarContainer>
      {detailId === 0 ? (
        <ShowSearchBar position={pos} onClick={handleClick}>
          {!isOpen ? <Open fill={color} /> : <Close fill={color} />}
        </ShowSearchBar>
      ) : (
        <CloseSearchBar onClick={handleClick}></CloseSearchBar>
      )}
      {detailId !== 0 && (
        <MapCafeDetail
          closeAction={handleDetailClick}
          getReviewIndex={handleReviewIndexClick}
          color={color}
          data={search[detailId - 1]}
          getUpdateReview={handleUpdateReviewData}
        />
      )}
      {detailId !== 0 && reviewRU === 1 ? (
        <RegisterReview closeReview={handleReviewIndexClick} color={color} />
      ) : (
        detailId !== 0 &&
        reviewRU === 2 && (
          <UpdateReview
            closeReview={handleReviewIndexClick}
            color={color}
            reviewData={updateReviewData}
          />
        )
      )}
    </>
  );
}

export default MapListBar;

const SearchBarContainer = styled.div`
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
    height: 100vh;
    visibility: visible;
    opacity: 1;
  }
  > div {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > hr {
    width: 360px;
    border: 1.5px solid rgba(241, 241, 241, 1);
    margin: 0;
  }
  > ul {
    flex: 1;
    width: 90%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
    > li {
      width: 90%;
      margin: 10px 0 15px 0;
      cursor: pointer;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SearchInput = styled.input`
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
    outline: 2px solid ${(props) => props.color};
  }
`;

const SearchCafeImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SearchCafeName = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.color};
  margin: 13px 0;
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
  border-bottom-right-radius: 8 ㅠpx;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: ${(props) => props.position};
  cursor: pointer;
  transition: all 0.3s;
`;
const CloseSearchBar = styled.div`
  width: 0;
  opacity: 0;
`;
