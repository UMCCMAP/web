import React, { useEffect, useState } from 'react';
import baseAxios from '../../apis/baseAxios';
import * as L from './styles/MapListBar.style';
import MapCafeDetail from './MapCafeDetail';
import RegisterReview from './MapReview/RegisterReview';
import ReadReview from './MapReview/ReadReview';
import UpdateReview from './MapReview/UpdateReview';
import { ReactComponent as Open } from '../../assets/images/openSearchbar.svg';
import { ReactComponent as Close } from '../../assets/images/closeSearchbar.svg';

function MapListBar({ color, cafeItems, mapItems }) {
  // const token = localStorage.getItem('accessToken');
  const [isOpen, setIsOpen] = useState(false);
  const [detailCafe, setDetailCafe] = useState([]);
  const [reviewCRU, setReviewCRU] = useState(0);
  const [reviewData, setReviewData] = useState({
    reviewIdx: -1,
    data: [],
  });
  const [searchText, setSearchText] = useState('');
  const [cafeData, setCafeData] = useState(mapItems);

  const handleInputText = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailClick = () => {
    setDetailCafe([]);
  };

  const handleReviewIndexClick = (index) => {
    setReviewCRU(index);
  };

  const handleReviewData = (data) => {
    setReviewData(data);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const searchCafe = async () => {
        try {
          const response = await baseAxios.get(`cafes/name?name=${searchText}`);
          setCafeData(response.data);
          cafeItems(response.data);
        } catch (e) {
          console.error(e);
        }
      };
      searchCafe();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);
  useEffect(() => {
    setCafeData(mapItems);
  }, [mapItems]);

  return (
    <>
      <L.SearchBarContainer
        className={isOpen && reviewCRU !== 1 && reviewCRU !== 2 && reviewCRU !== 3 ? 'show' : ''}
      >
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
          {cafeData.map((data, index) => (
            <li
              key={index}
              onClick={() => {
                setDetailCafe(data);
              }}
            >
              <L.SearchCafeImg>
                <img src={data?.image} alt="카페 사진" />
              </L.SearchCafeImg>
              <L.SearchCafeName color={color}>{data?.name}</L.SearchCafeName>
              <L.SearchCafe>{data?.info}</L.SearchCafe>
              <L.SearchCafeScore>
                <span>리뷰 {data.totalReviews}개</span>
                <hr />
                <span>평점 {data.averageRating}</span>
              </L.SearchCafeScore>
            </li>
          ))}
        </ul>
      </L.SearchBarContainer>
      {detailCafe.length === 0 ? (
        <L.ShowSearchBar onClick={handleClick}>
          {!isOpen ? <Open fill={color} /> : <Close fill={color} />}
        </L.ShowSearchBar>
      ) : (
        <L.CloseSearchBar onClick={handleClick}></L.CloseSearchBar>
      )}
      {detailCafe.length !== 0 && (
        <MapCafeDetail
          closeAction={handleDetailClick}
          getReviewIndex={handleReviewIndexClick}
          color={color}
          data={detailCafe}
          getReviewData={handleReviewData}
        />
      )}
      {detailCafe.length !== 0 && reviewCRU === 1 ? (
        <RegisterReview closeReview={handleReviewIndexClick} color={color} />
      ) : detailCafe.length !== 0 && reviewCRU === 2 ? (
        <UpdateReview closeReview={handleReviewIndexClick} color={color} reviewData={reviewData} />
      ) : (
        detailCafe.length !== 0 &&
        reviewCRU === 3 && (
          <ReadReview
            closeReview={handleReviewIndexClick}
            color={color}
            reviewData={reviewData}
            getReviewIndex={handleReviewIndexClick}
          />
        )
      )}
    </>
  );
}

export default MapListBar;
