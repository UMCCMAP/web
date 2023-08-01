import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';

function RecommendCafePage() {
  return (
    <SearchContainer>
      <Map markerImg="src/assets/images/cmapmark.svg" />
      <MapNavbar
        logoImg="src/assets/images/cmapLogoB.svg"
        color="rgba(96, 167, 225, 1)"
        hovercolor="rgba(117, 177, 226, 0.812)"
      />
      <MapListBar color="rgba(96, 167, 225, 1)" />
    </SearchContainer>
  );
}

export default RecommendCafePage;

const SearchContainer = styled.div`
  background-color: antiquewhite;
  display: flex;
`;
