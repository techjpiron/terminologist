import { useRouter } from "next/router";
import UploadButton from "./buttons/UploadButton";
import DownloadButton from "./buttons/DownloadButton";
import GridButton from "./buttons/GridButton";
import TableButton from "./buttons/TableButton";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex justify-between mb-8 items-center">
      <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tighter">
        Terminologist
      </h1>
      <div className="grid grid-flow-col gap-2">
        <UploadButton />
        <DownloadButton />
        {pathname !== "/" ? <GridButton /> : null}
        {pathname !== "/table" ? <TableButton /> : null}
      </div>
    </header>
  );
};

export default Navbar;
