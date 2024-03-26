import React from "react";
import BookCard from "./BookCard";
import NoDataFound from "./NoDataFound";

const Readbooks = () => {
  let stateOfLocalStorage = true;
  let localReadData;
  if (String(localStorage.getItem("readBook")) === "null") {
    stateOfLocalStorage = false;
  }

  if (stateOfLocalStorage) {
    localReadData = JSON.parse(localStorage.getItem("readBook"));
  }

  return (
    <div>
      {stateOfLocalStorage ? (
        localReadData.map((cardData, index) => (
          <BookCard cardData={cardData} key={14568 + index}></BookCard>
        ))
      ) : (
        <NoDataFound></NoDataFound>
      )}
    </div>
  );
};

export default Readbooks;
