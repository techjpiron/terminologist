import { useLocalStorage } from "react-use";
import Nav from "../components/Nav";
import UploadButton from "../components/UploadButton";
import ConceptGrp from "../components/ConceptGrp";
import LanguageGrp from "../components/LanguageGrp";
import TermGrp from "../components/TermGrp";
import Term from "../components/Term";
import Field from "../components/Field";
import Meta from "../components/Meta";
import toArray from "../lib/toArray";

const IndexPage = () => {
  const [file, setFile] = useLocalStorage("file");

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
            {toArray(transacGrp).map(({ transac: { value, _type }, date }) => (
              <Meta
                value={value}
                type={_type}
                date={date}
                key={`${value}-${_type}`}
              />
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
