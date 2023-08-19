import { React, useState, useEffect } from 'react';
import Map from '../../components/Map';
import MapNavbar from '../../components/CafeMap/MapNavbar';
import MapListBar from '../../components/CafeMap/MapListBar';
import MapUserBar from './components/MapUserBar';
import ListModal from './components/ListModal';
import * as C from '../../styles/PageContainer.style';

function CmapPage() {
  const [modal, setModal] = useState('none');
  const [cmapList, setCmapList] = useState([]);
  useEffect(() => {
    console.log(cmapList);
  }, [cmapList]);
  return (
    <C.Container>
      {modal !== 'none' && <ListModal modal={modal} setModal={setModal}></ListModal>}
      <Map markerImg="src/assets/images/cmapLogoR.svg" cmapList={cmapList} />
      <MapNavbar
        content="search"
        logoImg="src/assets/images/cmapLogoR.svg"
        color="rgba(255, 104, 104, 1)"
        hovercolor="rgb(245, 173, 173)"
      />
      <MapListBar color="rgba(255, 104, 104, 1)" />
      <MapUserBar setModal={setModal} setCmapList={setCmapList} />
    </C.Container>
  );
}

export default CmapPage;
