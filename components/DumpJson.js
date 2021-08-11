const DumpJson = ({ data }) => (
  <pre className="my-4 p-2 rounded bg-gray-800 text-white">
    {JSON.stringify(data, null, 2)}
  </pre>
);

export default DumpJson;
