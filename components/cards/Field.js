const Field = ({ name, children }) => (
  <p>
    <span className="font-bold">{name}</span> {children}
  </p>
);

export default Field;
