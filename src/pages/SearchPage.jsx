import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';

function SearchPage() {
  return (
    <SearchContainer>
      <Map markerImg="src/assets/images/cmapmark.svg" />
      <MapNavbar
        content="search"
        logoImg="src/assets/images/cmapLogoG.svg"
        color="rgb(33, 174, 33)"
        hovercolor="rgb(154, 200, 154)"
      />
      <MapListBar pos="155px" color="rgb(33, 174, 33)" />
    </SearchContainer>
  );
}

export default SearchPage;

const SearchContainer = styled.div`
  height: 100vh;
  display: flex;
`;
