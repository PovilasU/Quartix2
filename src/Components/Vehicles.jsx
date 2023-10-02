import Vehicle from "./Vehicle";
import { MyStore } from "../App";
import { useContext } from "react";

export default function Vehicles({ vehicles }) {
  const [data, setData] = useContext(MyStore);
  const [filteredVehicles, setFilteredVehicles] = useContext(MyStore);

  // const [filteredVehicles, setFilteredVehicles] = useState(
  //   filterVehByType("car")
  // );
  const vehicleList = vehicles.map((v, vi) => {
    return (
      <li key={v.id}>
        <Vehicle key={v.id} vehicle={v} vi={vi} />
      </li>
    );
  });

  let uniqueVtypes = [...new Set(vehicles.map((v) => v.type))];
  //let
  console.log("uniqueVtypes", uniqueVtypes);

  function filterVehByType(vType) {
    return vehicles
      .filter((vehicle) => {
        return vehicle.type == vType;
      })
      .map((vehicle, i) => <Vehicle key={i} vehicle={vehicle} />);
  }

  console.log("test", filterVehByType("van"));
  //  setFilteredVehicles(filterVehByType(e.currentTarget.value));
  const filterByTypeList = (
    <>
      <div>
        {" "}
        <label>Filter vehicles by type</label>
        <select
          name="filterByType"
          onChange={(e) => {
            console.log(e.currentTarget.value);
          }}
        >
          {uniqueVtypes.map((vtype, i) => {
            return (
              <option key={i} value={vtype}>
                {vtype}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
  return (
    <>
      <h2>Vehicles</h2>
      {filterByTypeList}

      {vehicleList}
    </>
  );
}
