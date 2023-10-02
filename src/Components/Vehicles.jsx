import Vehicle from "./Vehicle";
// import { MyStore } from "../App";
// import { useContext } from "react";

export default function Vehicles({ vehicles }) {
  // const [data, setData] = useContext(MyStore);
  // const [filteredVehicles, setFilteredVehicles] = useContext(MyStore);

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

  // console.log("test", filterVehByType("van"));
  //  setFilteredVehicles(filterVehByType(e.currentTarget.value));

  return (
    <>
      <h2>Vehicles</h2>
      {/* {filterByTypeList} */}

      {vehicleList}
    </>
  );
}
