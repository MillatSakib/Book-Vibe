import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({ bookData }) => {
  console.log(bookData);
  return (
    <Link
      to={`/fullbookData/${bookData.bookId}`}
      className="min-w-full group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={bookData.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {bookData.bookName}
        </h3>
        <span className="text-[1rem] font-semibold dark:text-gray-500">
          By: {bookData.author}
        </span>
        <p className="flex justify-between pt-6">
          <div>{bookData.category[0]}</div>
          <div className="flex gap-1 items-center">
            <CiStar />
            {bookData.rating}
          </div>
        </p>
      </div>
    </Link>
  );
};

export default Books;
