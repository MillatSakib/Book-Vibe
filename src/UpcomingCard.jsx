import React from "react";

const UpcomingCard = ({ cardData }) => {
  return (
    <div className="border-2 py-5 px-4 h-full rounded-2xl bg-green-50">
      <h2 className="text-gray-600 mb-4">
        <span className="font-bold text-xl">{cardData.category}</span>
      </h2>
      <div className="text-gray-600">
        <span className="font-semibold">{cardData.bookName}</span>
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">By: </span>
        {cardData.writerName}
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">Publisher Year: </span>
        {cardData.publishedDate}
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">Rating: </span>
        {cardData.rating}
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">Publish Date: </span>
        {cardData.publishedDate}
      </div>
      <div className="text-gray-600">
        <span className="font-semibold">Relase Date: </span>{" "}
        {cardData.releaseDate}
      </div>
    </div>
  );
};

export default UpcomingCard;
