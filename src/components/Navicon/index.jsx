import React from "react";

const Navicon = ({ children, href }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 stroke-1 hover:stroke-2 cursor-pointer text-white"
    >
      <a href={href}>{children}</a>
    </svg>
  );
};

export default Navicon;
