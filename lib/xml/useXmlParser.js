import { useEffect, useRef } from "react";

const useXmlParser = (setData) => {
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(new URL("./worker.js", import.meta.url));
    workerRef.current.onmessage = (evt) => {
      setData(evt.data);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, [setData]);

  return (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      workerRef.current.postMessage(event.target.result);
    });
    reader.readAsText(file);
  };
};

export default useXmlParser;
