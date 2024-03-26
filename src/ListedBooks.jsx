import React from "react";
import DropdownMenu from "./Dropdown";
import Tabs from "./Tabs";
import { Outlet } from "react-router";

const ListedBooks = () => {
  return (
    <div>
      <div className="text-center text-4xl font-bold my-6 bg-gray-100 max-w-[94%] rounded-lg py-4 mx-auto">
        Books
      </div>
      <div className="text-center">
        <DropdownMenu></DropdownMenu>
      </div>
      <div className="w-[90%] mx-auto">
        <Tabs></Tabs>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
