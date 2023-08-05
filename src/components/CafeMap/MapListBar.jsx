import React, { useState } from 'react';
import * as L from './styles/MapListBar.style';
import MapCafeDetail from './MapCafeDetail';
import RegisterReview from './MapReview/RegisterReview';
import UpdateReview from './MapReview/UpdateReview';
import { ReactComponent as Open } from '../../assets/images/openSearchbar.svg';
import { ReactComponent as Close } from '../../assets/images/closeSearchbar.svg';
import search from '../../pages/dummy/Search';

function MapListBar({ color }) {
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
      <L.SearchBarContainer className={isOpen && reviewRU !== 1 && reviewRU !== 2 ? 'show' : ''}>
        <div>
          <L.SearchInput
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
              <L.SearchCafeImg>
                <img src={data.images[0]} alt="카페 사진" />
              </L.SearchCafeImg>
              <L.SearchCafeName color={color}>{data.title}</L.SearchCafeName>
              <L.SearchCafe>{data.info}</L.SearchCafe>
              <L.SearchCafeScore>
                <span>리뷰 {data.reviews.length}개</span>
                <hr />
                <span>평점 {data.scope}</span>
              </L.SearchCafeScore>
            </li>
          ))}
        </ul>
      </L.SearchBarContainer>
      {detailId === 0 ? (
        <L.ShowSearchBar onClick={handleClick}>
          {!isOpen ? <Open fill={color} /> : <Close fill={color} />}
        </L.ShowSearchBar>
      ) : (
        <L.CloseSearchBar onClick={handleClick}></L.CloseSearchBar>
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
