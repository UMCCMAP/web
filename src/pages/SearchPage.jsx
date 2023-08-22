import React, { useState, useEffect } from 'react';
import Map from '@/components/Map';
import MapNavbar from '@/components/CafeMap/MapNavbar';
import MapListBar from '@/components/CafeMap/MapListBar';
import baseAxios from '@/apis/baseAxios';
import * as C from '@/styles/PageContainer.style';
import CMAPLogoG from '@/assets/images/cmapLogoG.svg';

function SearchPage() {
  const [mapItemList, setMapItemList] = useState([]);
  const [selectThemeData, setSelectThemeData] = useState(-1);
  const [searchCafeData, setSearchCafeData] = useState([]);
  const [clickMarkerItem, setClickedMarkerItem] = useState(-1);
  const [clickMarkerData, setClickMarkerData] = useState();

  const getCafeMapItem = async () => {
    try {
      const response = await baseAxios.get('cafes');
      setMapItemList(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (selectThemeData === -1 || selectThemeData === 0) {
      getCafeMapItem();
    }
  }, [selectThemeData]);

  useEffect(() => {
    if (selectThemeData === 0 || selectThemeData === -1) {
      setSearchCafeData([]);
    } else if (selectThemeData.length !== 0 && selectThemeData !== 3106) {
      const commonData = selectThemeData.filter((item) =>
        searchCafeData.some((searchItem) => searchItem.idx === item.idx),
      );
      setMapItemList(commonData);
    } else if (selectThemeData === 3106) {
      setMapItemList([]);
    } else {
      setMapItemList(searchCafeData);
    }
  }, [selectThemeData, searchCafeData]);

  const clickedMapMarker = (id) => {
    setClickedMarkerItem(id);
  };

  const clickedCafeData = (data) => {
    setClickMarkerData(data);
  };

  return (
    <C.Container>
      <Map
        markerImg={CMAPLogoG}
        mapItems={mapItemList}
        clickMarker={clickedMapMarker}
        clickedCafeItem={clickMarkerData}
      />
      <MapNavbar
        content="search"
        logoImg={CMAPLogoG}
        color="rgb(33, 174, 33)"
        hovercolor="rgb(154, 200, 154)"
        cafeItems={setSelectThemeData}
      />
      <MapListBar
        color="rgb(33, 174, 33)"
        cafeItems={setSearchCafeData}
        search={selectThemeData === 0 ? true : false}
        mapItems={mapItemList}
        clickMarker={clickMarkerItem}
        clickedCafeItem={clickedCafeData}
      />
    </C.Container>
  );
}

export default SearchPage;
