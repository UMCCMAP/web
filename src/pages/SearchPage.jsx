import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';

function SearchPage() {
  return (
    <SearchContainer>
      <Map markerImg="src/assets/images/cmapmark.svg" />
      <MapNavbar logoImg="src/assets/images/cmapLogoG.svg" color="rgba(33, 174, 33, 1)" />
      <MapListBar color="rgba(33, 174, 33, 1)" />
    </SearchContainer>
  );
}

export default SearchPage;

const SearchContainer = styled.div`
  background-color: antiquewhite;
  display: flex;
`;
