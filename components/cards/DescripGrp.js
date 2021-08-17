import Field from "./Field";

const DescripGrp = ({ descrip: { value, _type } }) => {
  return (
    <div>
      <Field name={_type}>{value}</Field>
    </div>
  );
};

export default DescripGrp;
