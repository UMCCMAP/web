import React from 'react';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';
import * as C from '../styles/PageContainer.style';

function CmapPage() {
  return (
    <C.Container>
      <Map markerImg="src/assets/images/cmapLogoR.svg" />
      <MapNavbar
        content="search"
        logoImg="src/assets/images/cmapLogoR.svg"
        color="rgba(255, 104, 104, 1)"
        hovercolor="rgb(245, 173, 173)"
      />
      <MapListBar color="rgba(255, 104, 104, 1)" />
    </C.Container>
  );
}

export default CmapPage;
