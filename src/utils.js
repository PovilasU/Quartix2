export function getAvailableInspections(vehicle, inspections) {
  //list of inspections allowed for the vehicle
  let allowedInspections = inspections
    .filter(
      (inspection) =>
        inspection.allowedType === "any" ||
        inspection.allowedType.includes(vehicle.type)
    )
    .map((inspection) => inspection.name);

  let availableInspections = [...allowedInspections];

  vehicle.inspection.forEach((i) =>
    allowedInspections.forEach(
      (e) =>
        e == i &&
        (availableInspections = availableInspections.filter((el) => el != e))
    )
  );

  return availableInspections;
}
