import { React, useState, useEffect } from 'react';
import Map from '@/components/Map';
import MapNavbar from '@/components/CafeMap/MapNavbar';
import MapListBar from '@/components/CafeMap/MapListBar';
import MapUserBar from './components/MapUserBar';
import ListModal from './components/ListModal';
import baseAxios from '@/apis/baseAxios';
import * as C from '@/styles/PageContainer.style';
import { useLocation } from 'react-router-dom';
import cmapLogoR from '@/assets/images/cmapLogoR.svg';

function CmapPage() {
  const location = useLocation();
  const [modal, setModal] = useState('none');
  const [cmapList, setCmapList] = useState([]);
  const [user, setUser] = useState(
    location.state && location.state.userName ? location.state.userName : 'ME',
  );
  const [mapItemList, setMapItemList] = useState([]);
  const [selectThemeData, setSelectThemeData] = useState(-1);
  const [searchCafeData, setSearchCafeData] = useState([]);
  const [clickMarkerItem, setClickedMarkerItem] = useState(-1);

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

  return (
    <C.Container>
      {modal !== 'none' && (
        <ListModal
          setCafeData={setClickedMarkerItem}
          user={user}
          modal={modal}
          setModal={setModal}
        ></ListModal>
      )}
      <Map markerImg={cmapLogoR} mapItems={cmapList} clickMarker={clickedMapMarker} />
      <MapNavbar
        content="search"
        logoImg={cmapLogoR}
        color="rgba(255, 104, 104, 1)"
        hovercolor="rgb(245, 173, 173)"
      />
      <MapListBar
        color="rgb(33, 174, 33)"
        cafeItems={setSearchCafeData}
        search={selectThemeData === 0 ? true : false}
        mapItems={mapItemList}
        clickMarker={clickMarkerItem}
      />
      <MapUserBar user={user} setUser={setUser} setModal={setModal} setCmapList={setCmapList} />
    </C.Container>
  );
}

export default CmapPage;
