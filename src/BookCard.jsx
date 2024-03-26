import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";

const BookCard = ({ cardData }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = cardData;
  console.log(image);
  return (
    <div className="my-10 flex gap-6 md:gap-10 border-2 rounded-xl p-6 items-center justify-start">
      <div>
        {" "}
        <img src={image} className="h-80" alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold my-2">{bookName}</h1>
        <h3 className="text-xl text-gray-600 my-4">By: {author}</h3>
        <div className="flex gap-8 my-4">
          <span className="font-bold text-xl">Tag </span>
          {tags.map((tag, index) => (
            <span
              key={index + 510}
              className="text-green-400 bg-gray-200 mx-2 rounded-full px-4 py-1"
            >
              #{tag}{" "}
            </span>
          ))}
          <span className="text-xl flex items-center gap-4">
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
          <span className="text-blue-600 bg-blue-100 px-6 py-1 rounded-full">
            Category: {category[1]}
          </span>
          <span className="text-amber-600 bg-amber-50 px-6 py-1 rounded-full">
            Rating: {rating}
          </span>
          <button className="text-white font-bold bg-green-500 px-8 py-3 rounded-full">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
