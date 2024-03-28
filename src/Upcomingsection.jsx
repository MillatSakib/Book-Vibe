import React from "react";
import UpcomingCard from "./UpcomingCard";

const Upcomingsection = ({ data }) => {
  return (
    <div>
      <div>
        <div className="mx-10 md:mx-32 lg:mx-40 text-2xl md:text-3xl text-gray-400 font-bold lg:text-4xl mt-8">
          {data.categoryName}
        </div>
        <div className="mx-10 md:mx-32 lg:mx-40 font-bold my-4">
          {data.description}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-10 md:mx-32 lg:mx-40">
          {data.books.map((cardData, index) => (
            <UpcomingCard
              key={data.categoryName + index}
              cardData={cardData}
            ></UpcomingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcomingsection;
