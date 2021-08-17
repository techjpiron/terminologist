import Link from "next/link";
import Button from "./Button";
import { HiViewGrid } from "react-icons/hi";

const GridButton = () => (
  <Link href="/" passHref>
    <Button as="a" Icon={HiViewGrid}>
      Grid View
    </Button>
  </Link>
);

export default GridButton;
