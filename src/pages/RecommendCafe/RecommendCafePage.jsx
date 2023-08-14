import React, { useState } from 'react';
import Map from '../../components/Map';
import MapNavbar from '../../components/CafeMap/MapNavbar';
import SelectThemeModal from './components/SelectThemeModal';
import MapCafeDetail from '../../components/CafeMap/MapCafeDetail';
import RegisterReview from '../../components/CafeMap/MapReview/RegisterReview';
import ReadReview from '../../components/CafeMap/MapReview/ReadReview';
import UpdateReview from '../../components/CafeMap/MapReview/UpdateReview';
import * as C from '../../styles/PageContainer.style';
import search from '../../pages/dummy/Search'; // 임시 데이터

function RecommendCafePage() {
  const [selectModalOpen, setSelectModalOpen] = useState(true);
  const [detailId, setDetailId] = useState(1);
  const [reviewData, setReviewData] = useState([]);
  const [reviewCRU, setReviewCRU] = useState(0);

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
      {selectModalOpen && <SelectThemeModal closeAction={handleModalClick} />}
      <Map markerImg="src/assets/images/cmapLogoB.svg" />
      <MapNavbar
        content="recommend"
        logoImg="src/assets/images/cmapLogoB.svg"
        color="rgba(96, 167, 225, 1)"
        hovercolor="rgba(117, 177, 226, 0.812)"
      />
      {detailId !== 0 && (
        <MapCafeDetail
          closeAction={handleDetailClick}
          getReviewIndex={handleReviewIndexClick}
          color="rgba(96, 167, 225, 1)"
          data={search[1]}
          getReviewData={handleReviewData}
        />
      )}
      {detailId !== 0 && reviewCRU === 1 ? (
        <RegisterReview closeReview={handleReviewIndexClick} color="rgba(96, 167, 225, 1)" />
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
