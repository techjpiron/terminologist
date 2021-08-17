import { createElement } from "react";

const Panel = ({ as = "div", className = "", children, ...props }) =>
  createElement(
    as,
    {
      className: `${className} bg-gray-800 text-gray-50 rounded-xl p-8 shadow-xl`,
      ...props
    },
    children
  );

export default Panel;
