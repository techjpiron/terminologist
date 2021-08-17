import { parseISO, format } from "date-fns";

const Date = ({ children }) => {
  const parsed = parseISO(children);
  const formated = format(parsed, "dd/MM/yyyy");

  return formated;
};

const TransacGrp = ({ transac: { value, _type }, date }) => {
  return (
    <p className="text-sm opacity-75">
      {_type} by {value} on <Date>{date}</Date>
    </p>
  );
};

export default TransacGrp;
