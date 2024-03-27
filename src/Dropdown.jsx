import React, { useState } from "react";

function Dropdown({ setLocalData, localData }) {
  function sort(sorting) {
    let targetString, targetString1;
    if (String(localData[0]) !== "null") {
      const abc = [...localData[0]];
      targetString = [...abc];
      targetString.sort((a, b) => b[sorting] - a[sorting]);
    } else {
      targetString = [];
    }

    if (String(localData[1]) !== "null") {
      const xyz = [...localData[1]];
      targetString1 = [...xyz];
      targetString1.sort((a, b) => b[sorting] - a[sorting]);
    } else {
      targetString1 = [];
    }

    // console.log(targetString, targetString1);

    setLocalData([targetString, targetString1]);
    // console.log(abc);

    // console.log(targetString, targetString1);
  }

  const [isOpen, setIsOpen] = useState(false);
  const sortCards = (sortParameter) => {
    setIsOpen(false);
    if (sortParameter === "rateing") {
      sort("rating");
    } else if (sortParameter === "pageNumber") {
      sort("totalPages");
    } else if (sortParameter === "publishYear") {
      sort("yearOfPublishing");
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-green-500 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Sort By
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="absolute left-[calc(50%-6rem)] mx-auto divide-gray-100 rounded-lg w-48 bg-slate-50"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => sortCards("rateing")}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => sortCards("pageNumber")}
              >
                Number Of Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => sortCards("publishYear")}
              >
                Publisher year
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
