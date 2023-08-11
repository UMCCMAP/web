import React from 'react';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';
import * as C from '../styles/PageContainer.style';

function SearchPage() {
  return (
    <C.Container>
      <Map markerImg="src/assets/images/cmapLogoG.svg" />
      <MapNavbar
        content="search"
        logoImg="src/assets/images/cmapLogoG.svg"
        color="rgb(33, 174, 33)"
        hovercolor="rgb(154, 200, 154)"
      />
      <MapListBar color="rgb(33, 174, 33)" />
    </C.Container>
  );
}

export default SearchPage;
