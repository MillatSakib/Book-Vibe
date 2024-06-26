import React from "react";
import BookCard from "./BookCard";
import NoDataFound from "./NoDataFound";

const Readbooks = ({ data }) => {
  let stateOfLocalStorage = true;
  let localReadData;
  if (String(data) === "null") {
    stateOfLocalStorage = false;
  }

  if (stateOfLocalStorage) {
    localReadData = data;
  }

  return (
    <div>
      {stateOfLocalStorage ? (
        localReadData.map((cardData, index) => (
          <BookCard cardData={cardData} key={14568 + index}></BookCard>
        ))
      ) : (
        <NoDataFound data="read"></NoDataFound>
      )}
    </div>
  );
};

export default Readbooks;
