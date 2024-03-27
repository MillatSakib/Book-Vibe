import React from "react";
import { useLoaderData } from "react-router";
import Upcomingsection from "./Upcomingsection";

const Upcoming = () => {
  const siteData = useLoaderData();
  //   console.log(siteData.categoryName);
  return (
    <div>
      <h1 className="text-center my-6 md:my-8 font-bold text-3xl md:text-4xl">
        Upcoming Books
      </h1>
      <div>
        {siteData.map((data, index) => (
          <Upcomingsection key={1612 + index} data={data}></Upcomingsection>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
