import Link from "next/link";
import { HiViewGrid } from "react-icons/hi";

const GridButton = () => (
  <Link href="/">
    <a className="p-2 bg-gray-100 rounded-full">
      <HiViewGrid className="h-8 w-8 text-gray-800 transform hover:scale-105" />
    </a>
  </Link>
);

export default GridButton;
