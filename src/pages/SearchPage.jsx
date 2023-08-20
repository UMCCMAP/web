import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import MapNavbar from '../components/CafeMap/MapNavbar';
import MapListBar from '../components/CafeMap/MapListBar';
import baseAxios from '../apis/baseAxios';
import * as C from '../styles/PageContainer.style';

function SearchPage() {
  const [mapItemList, setMapItemList] = useState([]);
  const [selectThemeData, setSelectThemeData] = useState([]);
  const [searchCafeData, setSearchCafeData] = useState([]);

  useEffect(() => {
    const getCafeMapItem = async () => {
      try {
        const response = await baseAxios.get('cafes');
        setMapItemList(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    getCafeMapItem();
  }, []);

  useEffect(() => {
    if (selectThemeData.length !== 0) {
      const commonData = selectThemeData.filter((item) =>
        searchCafeData.some((searchItem) => searchItem.idx === item.idx),
      );
      setMapItemList(commonData);
    } else {
      setMapItemList(searchCafeData);
    }
  }, [selectThemeData, searchCafeData]);

  localStorage.setItem('userIdx', 25);
  return (
    <C.Container>
      <Map markerImg="src/assets/images/cmapLogoG.svg" mapItems={mapItemList} />
      <MapNavbar
        content="search"
        logoImg="src/assets/images/cmapLogoG.svg"
        color="rgb(33, 174, 33)"
        hovercolor="rgb(154, 200, 154)"
        cafeItems={setSelectThemeData}
      />
      <MapListBar color="rgb(33, 174, 33)" cafeItems={setSearchCafeData} mapItems={mapItemList} />
    </C.Container>
  );
}

export default SearchPage;
