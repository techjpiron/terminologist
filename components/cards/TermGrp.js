import DescripGrp from "./DescripGrp";
import TransacGrp from "./TransacGrp";
import { useSelector } from "react-redux";
import toArray from "../../lib/toArray";

const TermGrp = ({ term, transacGrp, descripGrp }) => {
  const showTransac = useSelector((state) => state.config.showTransc);
  return (
    <div className="mb-4">
      <h2 className="text-4xl font-bold">{term}</h2>
      {toArray(descripGrp).map((descripGrp, index) => (
        <DescripGrp key={index} {...descripGrp} />
      ))}
      {showTransac
        ? toArray(transacGrp).map((transacGrp, index) => (
            <TransacGrp key={index} {...transacGrp} />
          ))
        : null}
    </div>
  );
};

export default TermGrp;
