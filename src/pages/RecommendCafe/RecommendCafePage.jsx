import React, { useState } from 'react';
import Map from '../../components/Map';
import MapNavbar from '../../components/CafeMap/MapNavbar';
import MapListBar from '../../components/CafeMap/MapListBar';
import SelectThemeModal from './components/SelectThemeModal';
import * as C from '../../styles/PageContainer.style';

function RecommendCafePage() {
  const [selectModalOpen, setSelectModalOpen] = useState(true);

  const handleModalClick = () => {
    setSelectModalOpen(!selectModalOpen);
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
      <MapListBar color="rgba(96, 167, 225, 1)" />
    </C.Container>
  );
}

export default RecommendCafePage;
