import React from "react";
import BookCard from "./BookCard";
import NoDataFound from "./NoDataFound";

const WishlistBooks = () => {
  let stateOfLocalStorage = true;
  let localReadData;
  if (String(localStorage.getItem("wishList")) === "null") {
    stateOfLocalStorage = false;
  }

  if (stateOfLocalStorage) {
    localReadData = JSON.parse(localStorage.getItem("wishList"));
  }

  return (
    <div>
      {stateOfLocalStorage ? (
        localReadData.map((cardData, index) => (
          <BookCard cardData={cardData} key={9142 + index}></BookCard>
        ))
      ) : (
        <NoDataFound data="add wishlist"></NoDataFound>
      )}
    </div>
  );
};

export default WishlistBooks;
