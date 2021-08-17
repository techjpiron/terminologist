import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../store/termBaseSlice";
import Button from "./Button";
import { HiUpload } from "react-icons/hi";

const UploadButton = () => {
  // redux
  const dispatch = useDispatch();
  console.log(typeof update);

  // simulates an upload button
  const ref = useRef(null);
  const onClick = () => ref.current.click();

  // parse the file on change
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../../lib/xml/worker.js", import.meta.url)
    );
    workerRef.current.onmessage = (event) => {
      dispatch(update(event.data));
    };
    return () => {
      workerRef.current.terminate();
    };
  });
  const onChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const rawFile = event.target.result;
      workerRef.current.postMessage(rawFile);
    });
    reader.readAsText(file);
  };

  return (
    <div>
      <Button Icon={HiUpload} onClick={onClick}>
        Upload
      </Button>
      <input className="hidden" type="file" ref={ref} onChange={onChange} />
    </div>
  );
};

export default UploadButton;
