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

  let uniqueVtypes = [...new Set(vehicles.map((v) => v.type))];

  const filterByTypeList = (
    <>
      <div>
        <label>Filter vehicles by type</label>
        <select
          name="filterByType"
          onChange={(e) => {
            setFilteredVehicles(filterVehByType(e.currentTarget.value));
          }}
        >
          {uniqueVtypes.map((vtype, i) => {
            return (
              <>
                <option key={i} value={vtype}>
                  {vtype}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </>
  );

  function filterVehByType(vType) {
    let filteredVehicles = vehicles;

    if (vType !== "any") {
      filteredVehicles = vehicles.filter((vehicle) => {
        return vehicle.type == vType;
      });
    }

    data.filteredVvehicles = filteredVehicles;

    setData({ ...data });
  }

  return (
    <MyStore.Provider value={[data, setData]}>
      <h1>Quartix2</h1>
      {filterByTypeList}
      <Vehicles
        vehicles={data.filteredVvehicles ? data.filteredVvehicles : vehicles}
      />
      ------
      {/* <Inspections inspection={} /> */}
    </MyStore.Provider>
  );
}

export default App;
