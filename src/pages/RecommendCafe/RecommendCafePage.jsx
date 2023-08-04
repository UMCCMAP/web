import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../../components/Map';
import MapNavbar from '../../components/CafeMap/MapNavbar';
import MapListBar from '../../components/CafeMap/MapListBar';
import SelectThemeModal from './components/SelectThemeModal';

function RecommendCafePage() {
  const [selectModalOpen, setSelectModalOpen] = useState(true);

  const handleModalClick = () => {
    setSelectModalOpen(!selectModalOpen);
  };

  return (
    <RecommendContainer>
      {selectModalOpen && <SelectThemeModal closeAction={handleModalClick} />}
      <Map markerImg="src/assets/images/cmapmark.svg" />
      <MapNavbar
        content="recommend"
        logoImg="src/assets/images/cmapLogoB.svg"
        color="rgba(96, 167, 225, 1)"
        hovercolor="rgba(117, 177, 226, 0.812)"
      />
      <MapListBar pos="175px" color="rgba(96, 167, 225, 1)" />
    </RecommendContainer>
  );
}

export default RecommendCafePage;

const RecommendContainer = styled.div`
  display: flex;
  height: 100vh;
`;
