import React from "react";
import UpcomingCard from "./UpcomingCard";

const Upcomingsection = ({ data }) => {
  return (
    <div>
      <div>
        <div>{data.categoryName}</div>
        <div>{data.description}</div>
        {/* {data.map((cardData, index) => (
          <UpcomingCard key={2293 + index} cardData={cardData}></UpcomingCard>
        ))} */}
      </div>
    </div>
  );
};

export default Upcomingsection;
