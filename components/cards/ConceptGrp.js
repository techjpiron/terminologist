import Panel from "../Panel";
import LanguageGrp from "./LanguageGrp";
import TransacGrp from "./TransacGrp";
import { useSelector } from "react-redux";
import toArray from "../../lib/toArray";

const ConceptGrp = ({ concept: id, languageGrp, transacGrp }) => {
  const showTransac = useSelector((state) => state.config.showTransc);
  return (
    <Panel>
      {id}
      {showTransac
        ? toArray(transacGrp).map((transacGrp, index) => (
            <TransacGrp key={index} {...transacGrp} />
          ))
        : null}
      {languageGrp.map((languageGrp) => (
        <LanguageGrp
          key={`${id}${languageGrp.language._lang}`}
          {...languageGrp}
        />
      ))}
    </Panel>
  );
};

export default ConceptGrp;
