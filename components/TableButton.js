import Link from "next/link";
import { HiTable } from "react-icons/hi";

const TableButton = () => (
  <Link href="/table">
    <a className="p-2 bg-gray-100 rounded-full">
      <HiTable className="h-8 w-8 text-gray-800 transform hover:scale-105" />
    </a>
  </Link>
);

export default TableButton;
