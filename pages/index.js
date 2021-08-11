import { useState } from "react";
import { parseISO, format } from "date-fns";
import UploadButton from "../components/UploadButton";

const Nav = ({ children, className }) => (
  <div
    className={`mb-8 p-8 rounded-xl bg-gray-800 text-white text-opacity shadow-2xl ${className}`}
  >
    {children}
  </div>
);

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
  const [file, setFile] = useState("");

  const conceptGrp = file?.mtf?.conceptGrp;

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <Nav className="w-full flex justify-between items-center bg-gray-500">
        <h1 className="text-3xl">Terminologist</h1>
        <UploadButton setFile={setFile} />
      </Nav>
      {conceptGrp ? (
        conceptGrp.map(({ concept, languageGrp, transacGrp }) => (
          <ConceptGrp key={concept}>
            <Field name="id">{concept}</Field>
            {toArray(transacGrp).map(({ transac, date }) => (
              <Meta value={transac.value} type={transac._type} date={date} />
            ))}
            {languageGrp.map(({ language, termGrp }) => (
              <LanguageGrp key={language._type}>
                <Field name="Language">{language._type}</Field>
                {toArray(termGrp).map(({ term, transacGrp, descripGrp }) => (
                  <TermGrp key={term}>
                    <Term>{term}</Term>
                    {toArray(descripGrp).map(
                      ({ descrip: { value, _type } }) => (
                        <Field name={_type} key={`${value}-${_type}`}>
                          {value}
                        </Field>
                      )
                    )}
                    {toArray(transacGrp).map(
                      ({ transac: { value, _type }, date }) => (
                        <Meta
                          value={value}
                          type={_type}
                          date={date}
                          key={`${value}-${_type}`}
                        />
                      )
                    )}
                  </TermGrp>
                ))}
              </LanguageGrp>
            ))}
          </ConceptGrp>
        ))
      ) : (
        <p>Upload a file</p>
      )}
    </div>
  );
};

export default IndexPage;
