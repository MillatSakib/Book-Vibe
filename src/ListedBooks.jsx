import React, { useState } from "react";
import DropdownMenu from "./Dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Readbooks from "./Readbooks";
import WishlistBooks from "./WishlistBooks";

const ListedBooks = () => {
  const [localData, setLocalData] = useState([
    JSON.parse(localStorage.getItem("readBook")),
    JSON.parse(localStorage.getItem("wishList")),
  ]);
  const [activeState, setActiveState] = useState(0);
  const activeStyle =
    "flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400";
  const inActiveStyle =
    "flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400";
  return (
    <div>
      <div className="text-center text-4xl font-bold my-6 bg-gray-100 max-w-[94%] rounded-lg py-4 mx-auto">
        Books
      </div>
      <div className="text-center">
        <DropdownMenu
          setLocalData={setLocalData}
          localData={localData}
        ></DropdownMenu>
      </div>
      <div className="w-[90%] mx-auto my-8">
        <Tabs>
          <TabList className="flex">
            <Tab
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
            </Tab>
            <Tab
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
            </Tab>
          </TabList>

          <TabPanel>
            <h2>
              <Readbooks data={localData[0]}></Readbooks>
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <WishlistBooks data={localData[1]}></WishlistBooks>
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
