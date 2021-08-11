import { parseISO, format } from "date-fns";

const Meta = ({ value, type, date }) => (
  <p className="opacity-75">
    {type} by {value} on {format(parseISO(date), "dd/MM/yyyy HH:mm")}
  </p>
);

export default Meta;
