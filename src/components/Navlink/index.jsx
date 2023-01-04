import React from "react";

const Navlink = ({ linkName, href }) => {
  return (
    <li className="mx-2">
      <a
        href={href}
        className="text-base italic text-white no-underline hover:text-gray-300"
      >
        {linkName}
      </a>
    </li>
  );
};

export default Navlink;
