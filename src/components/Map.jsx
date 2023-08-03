import React, { useState, useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

const mapItems = [
  {
    id: 1,
    station: '서울시청',
    latitude: 37.566535,
    longitude: 126.9779692,
  },
  {
    id: 2,
    station: '우리집',
    latitude: 37.5230658,
    longitude: 126.736356,
  },
  {
    id: 3,
    station: '방배1',
    latitude: 37.4859,
    longitude: 126.997865,
  },
  {
    id: 4,
    station: '방배2',
    latitude: 37.48528,
    longitude: 126.997227,
  },
  {
    id: 5,
    station: '방배3',
    latitude: 37.484234,
    longitude: 126.999292,
  },
];
function Map({ markerImg }) {
  const navermaps = useNavermaps();
  const [location, setLocation] = useState({ latitude: 37.566535, longitude: 126.9779692 });
  const [map, setMap] = useState(null);
  const [clickedMarkerId, setClickedMarkerId] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        const location = new navermaps.LatLng(position.coords.latitude, position.coords.longitude);
        map?.setCenter(location);
        map?.setZoom(15);
      });
    } else {
      window.alert('현재 위치를 알 수 없습니다.');
    }
  }, [map]);

  const handleClickMarker = (lat, long, id) => {
    const clickPosition = new navermaps.LatLng(lat, long);
    map?.panTo(clickPosition);
    setClickedMarkerId(id);
  };

  // marker 아이콘 커스텀
  const customMarkerIcon = (content, pinImage, id) => {
    const clickedStyle = id === clickedMarkerId ? 'display: block;' : 'display: none;';
    return {
      content: `
        <div style="position: relative;">
          <img src="${pinImage}" alt="Pin Image" />
          <div style="position: absolute; top: -20px; left: 0; text-align:center;font-size: 15px; font-weight: 700; ${clickedStyle}">
            ${content}
          </div>
        </div>
      `,
      anchor: new navermaps.Point(20, 60),
    };
  };

  return (
    <MapDiv style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <NaverMap
        mapDivId="map"
        defaultCenter={new navermaps.LatLng(location?.latitude, location?.longitude)}
        defaultZoom={15}
        ref={setMap}
      >
        {mapItems.map((data) => (
          <Marker
            key={data?.id}
            position={new navermaps.LatLng(data?.latitude, data?.longitude)}
            animation={1}
            icon={customMarkerIcon(data.station, markerImg, data.id)}
            onClick={() => handleClickMarker(data?.latitude, data?.longitude, data?.id)}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
}

export default Map;
