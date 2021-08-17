import TermGrm from "./TermGrp";
import Field from "./Field";
import toArray from "../../lib/toArray";

const LanguageGrp = ({ language, termGrp }) => {
  return (
    <div className="mt-8">
      <Field name="Language">{language._type}</Field>
      {toArray(termGrp).map((termGrp) => (
        <TermGrm key={termGrp.term} {...termGrp} />
      ))}
    </div>
  );
};

export default LanguageGrp;
