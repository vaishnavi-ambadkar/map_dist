
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const position = [45.943161, 24.966761]; // Romania

// const Map = () => {
//   return (
//     <MapContainer center={position} zoom={5} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           A marker in Romania.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default Map;
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

// const Map = ({ route }) => {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     if (route && route.length >= 2) {
//       setPositions(route);
//     }
//   }, [route]);

//   return (
//     <MapContainer center={route?.[0] || [45.943161, 24.966761]} zoom={5} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {positions.map((pos, index) => (
//         <Marker key={index} position={pos}>
//           <Popup>Point {index + 1}</Popup>
//         </Marker>
//       ))}
//       {positions.length >= 2 && <Polyline positions={positions} color="red" />}
//     </MapContainer>
//   );
// };

// export default Map;
import React, {useState} from 'react';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';

//data import
import {cities} from '../data/cities';
import {mountains} from '../data/mountains';
import {continents} from '../data/continents';

//Marker icon
import { defaultIcon } from '../assets/icons/defaultIcon';
import { mountainIcon } from '../assets/icons/mountainIcon';

//Layer
import { DefaultMarkerLayer, RadiusFilterLayer, TooltipMarkerLayer, ContinentsPolygonLayer } from '../components';

const Map = () => {
  const [radiusFilter, setRadiusFilter] = useState(null);
  const [geoFilter, setGeoFilter] = useState(null);

  const positionMadiun = [-7.629900, 111.517113];
  const positionRomania = [45.943161, 24.966761];

  const getRadiusFilter = () => radiusFilter;
  const getGeoFilter = () => geoFilter;

  return (
    <MapContainer center={positionRomania} zoom={4} scrollWheelZoom={false}>
      <LayersControl position='topright'>
        <LayersControl.BaseLayer checked name='OSM Streets '>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <DefaultMarkerLayer data={cities} icon={defaultIcon} setRadiusFilter={setRadiusFilter} getRadiusFilter={getRadiusFilter} getGeoFilter={getGeoFilter}/>
        <TooltipMarkerLayer data={mountains} icon={mountainIcon}/>
        <RadiusFilterLayer radiusFilter={radiusFilter} setRadiusFilter={setRadiusFilter}/>
        <ContinentsPolygonLayer data={continents} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter}/>
      </LayersControl>
    </MapContainer>
  )
}

export default Map