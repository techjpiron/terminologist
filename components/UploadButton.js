import { useRef } from "react";
import { HiDownload } from "react-icons/hi";

export default ({ setFile }) => {
  const ref = useRef(null);
  const onClick = () => ref.current.click();
  const onChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      setFile(event.target.result);
    });
    reader.readAsText(file);
  };
  return (
    <>
      <button className="p-2 bg-gray-100 rounded-full" onClick={onClick}>
        <HiDownload className="h-8 w-8 text-gray-800 transform hover:scale-105" />
      </button>
      <input
        id="file"
        name="file"
        type="file"
        ref={ref}
        className="hidden"
        onChange={onChange}
      />
    </>
  );
};
