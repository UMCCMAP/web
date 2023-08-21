import React, { useState } from 'react';
import Map from '@/components/Map';
import MapNavbar from '@/components/CafeMap/MapNavbar';
import SelectThemeModal from './components/SelectThemeModal';
import MapCafeDetail from '@/components/CafeMap/MapCafeDetail';
import RegisterReview from '@/components/CafeMap/MapReview/RegisterReview';
import ReadReview from '@/components/CafeMap/MapReview/ReadReview';
import UpdateReview from '@/components/CafeMap/MapReview/UpdateReview';
import * as C from '@/styles/PageContainer.style';
import CMAPLogoB from '@/assets/images/cmapLogoB.svg';

function RecommendCafePage() {
  const [selectModalOpen, setSelectModalOpen] = useState(true);
  const [detailId, setDetailId] = useState(1);
  const [reviewData, setReviewData] = useState([]);
  const [reviewCRU, setReviewCRU] = useState(0);
  const [recommendCafeList, setRecommendCafeList] = useState();

  const handleRecommendCafe = (data) => {
    setRecommendCafeList(data);
  };

  const handleModalClick = () => {
    setSelectModalOpen(!selectModalOpen);
  };

  const handleDetailClick = () => {
    setDetailId(0);
  };

  const handleReviewData = (data) => {
    setReviewData(data);
  };

  const handleReviewIndexClick = (index) => {
    setReviewCRU(index);
  };

  return (
    <C.Container>
      {selectModalOpen && (
        <SelectThemeModal closeAction={handleModalClick} getRecommendData={handleRecommendCafe} />
      )}
      <Map
        markerImg={CMAPLogoB}
        mapItems={recommendCafeList !== undefined ? recommendCafeList : []}
      />
      <MapNavbar
        content="recommend"
        logoImg={CMAPLogoB}
        color="rgba(96, 167, 225, 1)"
        hovercolor="rgba(117, 177, 226, 0.812)"
        cafeItems={recommendCafeList !== undefined ? recommendCafeList : []}
      />
      {detailId !== 0 && recommendCafeList !== undefined && (
        <MapCafeDetail
          closeAction={handleDetailClick}
          getReviewIndex={handleReviewIndexClick}
          color="rgba(96, 167, 225, 1)"
          data={recommendCafeList?.idx}
          getReviewData={handleReviewData}
        />
      )}
      {detailId !== 0 && reviewCRU === 1 ? (
        <RegisterReview
          closeReview={handleReviewIndexClick}
          color="rgba(96, 167, 225, 1)"
          dataId={recommendCafeList?.idx}
        />
      ) : detailId !== 0 && reviewCRU === 2 ? (
        <UpdateReview
          closeReview={handleReviewIndexClick}
          color="rgba(96, 167, 225, 1)"
          reviewData={reviewData}
        />
      ) : (
        detailId !== 0 &&
        reviewCRU === 3 && (
          <ReadReview
            closeReview={handleReviewIndexClick}
            color="rgba(96, 167, 225, 1)"
            data={reviewData}
            getReviewIndex={handleReviewIndexClick}
          />
        )
      )}
    </C.Container>
  );
}

export default RecommendCafePage;
