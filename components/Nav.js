const Navbar = ({ children, className }) => (
  <div
    className={`mb-8 p-8 rounded-xl bg-gray-800 text-white text-opacity shadow-2xl ${className}`}
  >
    {children}
  </div>
);

export default Navbar;
