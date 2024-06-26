import React from "react";

const NoDataFound = ({ data }) => {
  return (
    <div className="text-red-500 h-[50vh] flex items-center justify-center font-bold text-4xl lg:text-5xl text-center">
      Opps! There has no book you have {data}!!
    </div>
  );
};

export default NoDataFound;
