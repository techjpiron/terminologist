import { useLocalStorage } from "react-use";

import produce from "immer";

import Nav from "../components/Nav";
import UploadButton from "../components/UploadButton";
import ConceptGrp from "../components/ConceptGrp";
import LanguageGrp from "../components/LanguageGrp";
import TermGrp from "../components/TermGrp";
import Term from "../components/Term";
import Field from "../components/Field";
import Meta from "../components/Meta";
//import DumpJson from "../components/DumpJson";

import toArray from "../lib/toArray";

import { HiTrash } from "react-icons/hi";

const DeleteButton = ({ remove }) => {
  return (
    <button
      onClick={remove}
      className="absolute right-8 top-4 p-2 bg-gray-100 rounded-full"
    >
      <span className="sr-only">Delete</span>
      <HiTrash className="h-4 w-4 text-gray-800 transform hover:scale-105" />
    </button>
  );
};

const IndexPage = () => {
  const [data, setData] = useLocalStorage("data");
  const conceptGrp = data?.mtf?.conceptGrp;

  const remove = (id) => () => {
    setData(
      produce((draft) => {
        draft.mtf.conceptGrp = data.mtf.conceptGrp.filter(
          (concept) => concept.concept !== id
        );
      })
    );
  };

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <Nav className="w-full flex justify-between items-center bg-gray-500">
        <h1 className="text-3xl">Terminologist</h1>
        <UploadButton setFile={setData} />
      </Nav>
      {conceptGrp ? (
        conceptGrp.map(({ concept: id, languageGrp, transacGrp }) => (
          <ConceptGrp key={id}>
            <DeleteButton remove={remove(id)} />
            <Field name="id">{id}</Field>
            {toArray(transacGrp).map(({ transac: { value, _type }, date }) => (
              <Meta
                value={value}
                type={_type}
                date={date}
                key={`${id}${value}${_type}`}
              />
            ))}
            {languageGrp.map(({ language, termGrp }) => (
              <LanguageGrp key={`${id}${language._type}`}>
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
                          key={`${id}${value}${_type}`}
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
