import { useSelector } from "react-redux";
import ConceptGrp from "../components/cards/ConceptGrp";

import Main from "../components/Main";

const IndexPage = () => {
  const data = useSelector((state) => state.termBase);
  return (
    <Main className="grid grid-cols-2 gap-2">
      {data?.mtf?.conceptGrp?.map((conceptGrp) => (
        <ConceptGrp key={conceptGrp.concept} {...conceptGrp} />
      ))}
    </Main>
  );
};

export default IndexPage;
