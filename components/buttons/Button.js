import { createElement, forwardRef } from "react";

const Content = ({ Icon, children }) => (
  <>
    <Icon className="h-12 w-12 bg-gray-400 shadow-xl rounded-full p-2 text-gray-800 transform hover:scale-105 duration-250 ease-out" />
    <span className="sr-only">{children}</span>
  </>
);

const Button = ({ as = "button", Icon, children, ...props }, ref) =>
  createElement(
    as,
    { ref, ...props },
    <Content Icon={Icon}>{children}</Content>
  );
export default forwardRef(Button);
