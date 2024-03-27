import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = ({ stateId }) => {
  const [activeState, setActiveState] = useState(0);
  const activeStyle =
    "flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400";
  const inActiveStyle =
    "flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400";

  return (
    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap my-4">
      <Link
        to="/listedbooks/readBooks"
        className={activeState ? activeStyle : inActiveStyle}
        onClick={() => setActiveState(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Read Books</span>
      </Link>
      <Link
        to="/listedbooks/wishListBooks"
        className={!activeState ? activeStyle : inActiveStyle}
        onClick={() => setActiveState(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Wishlist Books</span>
      </Link>
    </div>
  );
};

export default Tabs;
