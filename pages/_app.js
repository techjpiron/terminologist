import "../styles/tailwind.css";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";
import Nav from "../components/Nav";
import UploadButton from "../components/UploadButton";
import GridButton from "../components/GridButton";
import TableButton from "../components/TableButton";

const App = ({ Component, pageProps }) => {
  const [data, setData] = useLocalStorage("data");
  const { pathname } = useRouter();
  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <Nav className="sm:col-span-2 w-full flex justify-between items-center bg-gray-500">
        <h1 className="text-3xl">Terminologist</h1>
        <div className="grid grid-flow-col auto-cols-max gap-2">
          <UploadButton setFile={setData} />
          {pathname !== "/" ? <GridButton /> : null}
          {pathname !== "/table" ? <TableButton /> : null}
        </div>
      </Nav>
      <div className="grid sm:grid-cols-2 gap-4">
        <Component data={data} setData={setData} {...pageProps} />
      </div>
    </div>
  );
};

export default App;
