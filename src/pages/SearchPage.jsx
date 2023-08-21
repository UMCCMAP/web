import React, { useState, useEffect } from 'react';
import Map from '@/components/Map';
import MapNavbar from '@/components/CafeMap/MapNavbar';
import MapListBar from '@/components/CafeMap/MapListBar';
import baseAxios from '@/apis/baseAxios';
import * as C from '@/styles/PageContainer.style';
import CMAPLogoG from '@/assets/images/cmapLogoG.svg';

function SearchPage() {
  const [mapItemList, setMapItemList] = useState([]);
  const [selectThemeData, setSelectThemeData] = useState([]);
  const [searchCafeData, setSearchCafeData] = useState([]);
  const [clickMarkerItem, setClickedMarkerItem] = useState(-1);

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

  const clickedMapMarker = (id) => {
    setClickedMarkerItem(id);
  };

  return (
    <C.Container>
      <Map markerImg={CMAPLogoG} mapItems={mapItemList} clickMarker={clickedMapMarker} />
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
        mapItems={mapItemList}
        clickMarker={clickMarkerItem}
      />
    </C.Container>
  );
}

export default SearchPage;
