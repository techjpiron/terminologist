import parse from "../lib/parser";
import { parseISO, format } from "date-fns";

const data = parse();

const ConceptGrp = ({ children }) => (
  <div className="my-4 p-8 rounded-xl bg-gray-800 text-white text-opacity-90 shadow-2xl">
    {children}
  </div>
);
const LanguageGrp = ({ children }) => (
  <div className="py-2 my-2 rounded">{children}</div>
);

const TermGrp = ({ children }) => <div className="mb-6">{children}</div>;

const Term = ({ children }) => <p className="text-3xl font-bold">{children}</p>;

const Field = ({ name, children }) => (
  <p>
    <span className="font-bold">{name}</span> : {children}
  </p>
);
const Dump = ({ data }) => (
  <pre className="my-4 p-2 rounded bg-gray-800 text-white">
    {JSON.stringify(data, null, 2)}
  </pre>
);

const toArray = (data) => {
  if (!data) {
    return [];
  }

  if (Array.isArray(data)) {
    return data;
  }
  return Array(data);
};

const Meta = ({ value, type, date }) => (
  <p className="opacity-75">
    {type} by {value} on {format(parseISO(date), "dd/MM/yyyy HH:mm")}
  </p>
);

const IndexPage = () => {
  const conceptGrp = data.mtf.conceptGrp;
  return (
    <div className="p-4 bg-gray-200">
      {conceptGrp.map(({ concept, languageGrp, transacGrp }) => (
        <ConceptGrp>
          <Field name="id">{concept}</Field>
          {toArray(transacGrp).map(({ transac, date }) => (
            <Meta value={transac.value} type={transac._type} date={date} />
          ))}
          {languageGrp.map(({ language, termGrp }) => (
            <LanguageGrp>
              <Field name="Language">{language._type}</Field>
              {toArray(termGrp).map(({ term, transacGrp, descripGrp }) => (
                <TermGrp>
                  <Term>{term}</Term>
                  {toArray(descripGrp).map(({ descrip: { value, _type } }) => (
                    <Field name={_type}>{value}</Field>
                  ))}
                  {toArray(transacGrp).map(({ transac, date }) => (
                    <Meta
                      value={transac.value}
                      type={transac._type}
                      date={date}
                    />
                  ))}
                </TermGrp>
              ))}
            </LanguageGrp>
          ))}
        </ConceptGrp>
      ))}
    </div>
  );
};

export default IndexPage;
