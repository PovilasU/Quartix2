import { useContext, useEffect } from "react";
import { MyStore } from "../App";
import { getAvailableInspections } from "../utils";

import Button from "./Button";
export default function Vehicle({ vehicle, vi, ii, type }) {
  const [data, setData] = useContext(MyStore);
  const name = type;
  const { inspections } = data;

  let availableInspections = getAvailableInspections(vehicle, inspections);
  //   console.log("availableInspections", availableInspections);
  //   console.log("availableInspections done");
  // console.log(availableInspections);
  const avaiInspections = availableInspections.map((inspection, index) => {
    return (
      <span key={inspection}>
        {inspection}/<Button val={inspection} vi={vi} ii={ii} type="add" />
      </span>
    );
  });

  const vinspections = vehicle.inspection.map((inspection, ii) => {
    return (
      <span key={inspection}>
        {inspection}
        <Button val={inspection} vi={vi} ii={ii} type="remove" />
      </span>
    );
  });

  return (
    <>
      Id:{vehicle.id}/description:{vehicle.description}/type:{vehicle.type}/
      inspections:
      {vinspections}
      <div> avaiInspections:{avaiInspections}</div>
    </>
  );
}
