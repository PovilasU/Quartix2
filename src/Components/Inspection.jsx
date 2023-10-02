export default function Inspection({ inspection }) {
  return (
    <>
      <span>
        Id: {inspection.id}/ name: {inspection.name}/
        {inspection.allowedType.join(", ")}
      </span>
    </>
  );
}
