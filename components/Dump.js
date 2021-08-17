import Panel from "./Panel";

const Dump = ({ children }) => (
  <Panel as="pre" className="overflow-x-auto">
    {JSON.stringify(children, null, 2)}
  </Panel>
);

export default Dump;
