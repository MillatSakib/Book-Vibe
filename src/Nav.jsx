import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeBtn, setActiveBtn] = useState(100);
  const activeButton = "btn btn-outline btn-success mx-2";
  const inActiveButton = "btn mx-2";
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Listed Books</a>
              </li>
              <li>
                <a>Pages To Read</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-green-500 font-extrabold ml-1 md:ml-6">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={activeBtn === 100 ? activeButton : inActiveButton}
                onClick={() => setActiveBtn(100)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listedbooks"
                className={activeBtn === 200 ? activeButton : inActiveButton}
                onClick={() => setActiveBtn(200)}
              >
                Listed Books
              </Link>
            </li>
            <li>
              <Link
                to="/pagestoread"
                className={activeBtn === 300 ? activeButton : inActiveButton}
                onClick={() => setActiveBtn(300)}
              >
                Pages To Read
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 mr-1 md:mr-6">
          <a className="btn text-bold btn-success text-white">Sign In</a>
          <a className="btn text-bold btn-info text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
