import React from "react";
import Books from "./Books";
import Banner from "./Banner";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksData = useLoaderData();
  console.log(booksData);
  return (
    <div>
      <Banner></Banner>
      <h3 className="text-2xl md:text-4xl text-center font-semibold my-6 md:my-10">
        Books
      </h3>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksData.map((bookData) => (
          <Books key={bookData.bookId} bookData={bookData}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;
