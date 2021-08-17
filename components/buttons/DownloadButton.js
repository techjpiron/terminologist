import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { HiDownload } from "react-icons/hi";

const UploadButton = () => {
  // get redux data
  const data = useSelector((state) => state.termBase);

  // create download link
  const linkRef = useRef(null);

  // create json to xml worker
  const workerRef = useRef(null);
  useEffect(() => {
    console.log("Worker created");
    workerRef.current = new Worker(
      new URL("../../lib/xml/toXml.worker.js", import.meta.url)
    );
    workerRef.current.onmessage = (event) => {
      onFileCreated(event);
    };
    return () => {
      workerRef.current.terminate();
    };
  });

  // onClick
  const onClick = () => {
    // 1. create the xml file
    workerRef.current.postMessage(data);
  };
  const onFileCreated = (event) => {
    // 2. update link
    const fileContent = event.data;
    const blob = new Blob([fileContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    linkRef.current.href = url;
    // 3. click the link
    linkRef.current.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: window })
    );
  };

  return (
    <div>
      <Button Icon={HiDownload} onClick={onClick}>
        Download
      </Button>
      <a className="sr-only" ref={linkRef} href="/" download="download.xml">
        Download
      </a>
    </div>
  );
};

export default UploadButton;
