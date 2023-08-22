import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import baseAxios from '@/apis/baseAxios';
import * as L from './styles/MapListBar.style';
import MapCafeDetail from './MapCafeDetail';
import RegisterReview from './MapReview/RegisterReview';
import ReadReview from './MapReview/ReadReview';
import UpdateReview from './MapReview/UpdateReview';
import { ReactComponent as Open } from '@/assets/images/openSearchbar.svg';
import { ReactComponent as Close } from '@/assets/images/closeSearchbar.svg';

function MapListBar({
  color,
  cafeItems,
  search,
  mapItems,
  clickMarker,
  clickedCafeItem,
  listModalData,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get('search');
  const [isOpen, setIsOpen] = useState(false);
  const [detailCafeIdx, setDetailCafeIdx] = useState(-1);
  const [reviewCRU, setReviewCRU] = useState(0);
  const [reviewData, setReviewData] = useState({
    reviewIdx: -1,
    data: [],
  });
  const [searchText, setSearchText] = useState('');
  const [cafeData, setCafeData] = useState([]);

  const handleInputText = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailClick = () => {
    setDetailCafeIdx(-1);
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

  useEffect(() => {
    setDetailCafeIdx(clickMarker);
  }, [clickMarker]);

  useEffect(() => {
    if (queryParamValue) {
      setSearchText(queryParamValue);
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (search) {
      setSearchText('');
    }
  }, [search]);
  useEffect(() => {
    if (listModalData !== '' && listModalData !== undefined) {
      setSearchText(listModalData);
      setIsOpen(true);
    }
  }, [listModalData]);
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
                setDetailCafeIdx(data.idx);
                clickedCafeItem(data);
              }}
            >
              <L.SearchCafeImg>
                <img src={data?.image} alt="카페 사진" />
              </L.SearchCafeImg>
              <L.SearchCafeName color={color}>{data?.name}</L.SearchCafeName>
              <L.SearchCafe>{data?.info}</L.SearchCafe>
              <L.SearchCafeScore>
                <span>리뷰 {data?.totalReviews}개</span>
                <hr />
                <span>평점 {data?.averageRating}</span>
              </L.SearchCafeScore>
            </li>
          ))}
        </ul>
      </L.SearchBarContainer>
      {detailCafeIdx === -1 ? (
        <L.ShowSearchBar onClick={handleClick}>
          {!isOpen ? <Open fill={color} /> : <Close fill={color} />}
        </L.ShowSearchBar>
      ) : (
        <L.CloseSearchBar onClick={handleClick}></L.CloseSearchBar>
      )}
      {detailCafeIdx !== -1 && (
        <MapCafeDetail
          closeAction={handleDetailClick}
          getReviewIndex={handleReviewIndexClick}
          color={color}
          data={detailCafeIdx}
          getReviewData={handleReviewData}
        />
      )}
      {detailCafeIdx !== -1 && reviewCRU === 1 ? (
        <RegisterReview closeReview={handleReviewIndexClick} color={color} dataId={detailCafeIdx} />
      ) : detailCafeIdx !== -1 && reviewCRU === 2 ? (
        <UpdateReview closeReview={handleReviewIndexClick} color={color} reviewData={reviewData} />
      ) : (
        detailCafeIdx !== -1 &&
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
