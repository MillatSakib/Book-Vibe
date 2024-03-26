import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookCard = ({ cardData }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = cardData;
  console.log(image);
  return (
    <div className="my-10 flex flex-col lg:flex-row gap-6 md:gap-10 border-2 rounded-xl p-6 items-center justify-start">
      <div>
        {" "}
        <img src={image} className="h-80" alt="" />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-semibold my-2">{bookName}</h1>
        <h3 className="text-[1rem] md:text-xl text-gray-600 my-4">
          By: {author}
        </h3>
        <div className="flex gap-8 my-4 flex-col sm:flex-row">
          <div className="flex gap-8 my-4">
            <span className="font-bold text-[1rem] md:text-xl">Tag </span>
            {tags.map((tag, index) => (
              <span
                key={index + 510}
                className="text-green-400 bg-gray-200 mx-2 rounded-full px-4 py-1"
              >
                #{tag}{" "}
              </span>
            ))}
          </div>
          <span className="text-[1rem] md:text-xl flex items-center gap-4">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex my-4 items-center gap-10">
          <div className="flex my-4 items-center gap-3">
            <GoPeople /> Publisher: {publisher}
          </div>
          <div className="flex my-4 items-center gap-3">
            <RiPagesLine /> Pages: {totalPages}
          </div>
        </div>
        <hr></hr>
        <div className="my-4 flex gap-6">
          <span className="text-blue-600 text-xs bg-blue-100 px-6 py-2 rounded-full my-6">
            Category: {category[1]}
          </span>
          <span className="text-amber-600 text-xs bg-amber-50 px-6 py-2 rounded-full my-6">
            Rating: {rating}
          </span>
          <Link to={`/listedbooks/${bookId}`}>
            <button className="text-white font-bold bg-green-500 px-8 py-3 rounded-full my-3">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
