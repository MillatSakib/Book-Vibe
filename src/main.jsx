import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import FullBookData from "./FullBookData.jsx";
import ListedBooks from "./ListedBooks.jsx";
import PagesToRead from "../PagesToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://millatsakib.github.io/img-src/assignment8/bookVibe.json"
          ),
      },
      {
        path: "/fullbookData/:bookID",
        element: <FullBookData></FullBookData>,
        loader: ({ params }) =>
          fetch(
            `https://millatsakib.github.io/img-src/assignment8/${params.bookID}.json`
          ),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
