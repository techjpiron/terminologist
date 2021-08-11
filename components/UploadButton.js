import { useRef, useEffect, useCallback } from "react";
import { HiDownload } from "react-icons/hi";

// TODO allow to cancel file parsing

export default ({ setFile }) => {
  // simulates an upload button
  const ref = useRef(null);
  const onClick = () => ref.current.click();

  // parse the file on change
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../lib/xml/worker.js", import.meta.url)
    );
    workerRef.current.onmessage = (evt) => {
      setFile(evt.data);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);
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
