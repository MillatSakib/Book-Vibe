import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({ bookData }) => {
  console.log(bookData);
  return (
    <Link
      to={`/fullbookData/${bookData.bookId}`}
      className="min-w-full group hover:no-underline focus:no-underline border-2 rounded-xl p-4"
    >
      <img
        role="presentation"
        className="object-cover text-center mx-auto rounded h-44"
        src={bookData.image}
      />
      <div className="mt-10 text-center font-semibold">
        {bookData.tags.map((tag, index) => (
          <span
            key={index + 510}
            className="text-green-400 bg-gray-200 mx-2 rounded-full px-4 py-1"
          >
            #{tag}{" "}
          </span>
        ))}
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {bookData.bookName}
        </h3>
        <span className="text-[1rem] font-semibold">By: {bookData.author}</span>
        <p className="flex justify-between pt-6">
          <div>{bookData.category[1]}</div>
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
