import { useSelector } from "react-redux";
import Table from "../components/table/Table";

import Main from "../components/Main";

const TablePage = () => {
  const data = useSelector((state) => state.termBase);
  return (
    <Main className="space-y-2">
      <Table data={data} />
    </Main>
  );
};

export default TablePage;
