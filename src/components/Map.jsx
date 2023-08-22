import React, { useState, useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function Map({ markerImg, mapItems, clickMarker, clickedCafeItem }) {
  const navermaps = useNavermaps();
  const [location, setLocation] = useState({ latitude: 37.566535, longitude: 126.9779692 });
  const [map, setMap] = useState(null);
  const [clickedMarkerId, setClickedMarkerId] = useState(null);

  useEffect(() => {
    if (mapItems.length === 0) return;
    if (Array.isArray(mapItems)) {
      setLocation({
        // latitude: position.coords.latitude,
        // longitude: position.coords.longitude,
        latitude: mapItems[0].cafeLatitude,
        longitude: mapItems[0].cafeLongitude,
      });
      const location = new navermaps.LatLng(mapItems[0].cafeLatitude, mapItems[0].cafeLongitude);
      map?.setCenter(location);
      map?.setZoom(15);
    } else {
      setLocation({
        latitude: mapItems.cafeLatitude,
        longitude: mapItems.cafeLongitude,
      });
      const location = new navermaps.LatLng(mapItems.cafeLatitude, mapItems.cafeLongitude);
      map?.setCenter(location);
      map?.setZoom(16);
    }
  }, [map, mapItems]);

  useEffect(() => {
    if (clickedCafeItem !== undefined) {
      setClickedMarkerId(clickedCafeItem.idx);
      setLocation({
        latitude: clickedCafeItem.cafeLatitude,
        longitude: clickedCafeItem.cafeLongitude,
      });
      const location = new navermaps.LatLng(
        clickedCafeItem.cafeLatitude,
        clickedCafeItem.cafeLongitude,
      );
      map?.setCenter(location);
      map?.setZoom(16);
    }
  }, [clickedCafeItem]);

  const handleClickMarker = (lat, long, id) => {
    const clickPosition = new navermaps.LatLng(lat, long);
    map?.panTo(clickPosition);
    setClickedMarkerId(id);
    clickMarker(id);
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
        {Array.isArray(mapItems) ? (
          <>
            {mapItems.map((data) => (
              <Marker
                key={data?.idx}
                position={new navermaps.LatLng(data?.cafeLatitude, data?.cafeLongitude)}
                icon={customMarkerIcon(data?.name, markerImg, data?.idx)}
                onClick={() =>
                  handleClickMarker(data?.cafeLatitude, data?.cafeLongitude, data?.idx)
                }
              />
            ))}
          </>
        ) : (
          <Marker
            key={mapItems.idx}
            position={new navermaps.LatLng(mapItems.cafeLatitude, mapItems.cafeLongitude)}
            icon={customMarkerIcon(mapItems.name, markerImg, mapItems.idx)}
            onClick={() =>
              handleClickMarker(mapItems.cafeLatitude, mapItems.cafeLongitude, mapItems.idx)
            }
          />
        )}
      </NaverMap>
    </MapDiv>
  );
}

export default Map;
