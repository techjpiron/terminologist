import Link from "next/link";
import Button from "./Button";
import { HiTable } from "react-icons/hi";

const TableButton = () => (
  <Link href="/table" passHref>
    <Button as="a" Icon={HiTable}>
      Grid View
    </Button>
  </Link>
);

export default TableButton;
