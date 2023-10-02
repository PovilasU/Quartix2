import { useState, createContext, useEffect } from "react";
import { vehiclesData } from "./data.js";
import "./App.css";
import "./povilas.js";
import "./utils.js";
import Vehicle from "./Components/Vehicle.jsx";
import Inspection from "./Components/Inspection.jsx";
import Vehicles from "./Components/Vehicles.jsx";

export const MyStore = createContext();

//console.log(vehiclesData);

function App() {
  const [data, setData] = useState(vehiclesData);
  const { vehicles, inspections } = data;
  const [filteredVehicles, setFilteredVehicles] = useState(
    //filterVehByType("car")

    "bbb"
  );

  function filterVehByType(vType) {
    return data.vehicles
      .filter((vehicle, i) => vehicle.type == vType)
      .map((vehicle, i) => {
        return <Vehicle key={i} vehicle={vehicle} />;
      });
  }
  //, filteredVehicles, setFilteredVehicles

  return (
    <MyStore.Provider
      value={[data, setData, filteredVehicles, setFilteredVehicles]}
    >
      <h1>Quartix2</h1>
      <Vehicles vehicles={vehicles} />
      ------
      {/* <Inspections inspection={} /> */}
    </MyStore.Provider>
  );
}

export default App;
