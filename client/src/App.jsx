// import React from 'react';
// import { Map } from './Map';

// import 'antd/dist/reset.css';
// import 'leaflet/dist/leaflet.css';
// import './App.css';

// const App = () => {
//   return (
//     <Map />
//   )
// }

// export default App;
import React from "react";
import { Map } from "./Map";
import CityDistance from "./components/CityDistance.jsx"; // Correct import

import "antd/dist/reset.css";
import "leaflet/dist/leaflet.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Map with Distance Calculator</h1>
      <CityDistance />
      <Map />
    </div>
  );
};

export default App;
