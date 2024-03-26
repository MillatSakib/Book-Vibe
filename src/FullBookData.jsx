import React from "react";
import { useLoaderData } from "react-router";

const FullBookData = () => {
  const bookFullData = useLoaderData();
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
  } = bookFullData[0];
  console.log(bookId);

  return (
    <div className="flex min-h-[80vh] lg:w-[1200px] bg-slate-50 max-w-[95%] mx-auto my-6 rounded-lg justify-center items-center flex-col md:flex-row py-8">
      <div className="w-[30%]">
        <img src={image} className="max-h-[80vh] text-center mx-auto " />
      </div>
      <div className="text-center w-[60%] md:text-left md:ml-6">
        <div className="my-10">
          <div className="text-2xl font-semibold">{bookName}</div>
          <div className="text-[1rem]">By: {author}</div>
          <hr />
          <div className="text-[1rem]">{category[1]}</div>
          <hr />
          <div className="text-[1rem]">
            <span className="font-bold">Review: </span>
            {review}
          </div>
          <div className="text-[1rem] my-4 flex items-center">
            <span className="font-bold">
              Tags:&nbsp; &nbsp;
              {tags.map((tag) => (
                <span className="text-green-400 bg-gray-200 mx-2 rounded-full px-4 py-1">
                  #{tag}{" "}
                </span>
              ))}
            </span>
          </div>
          <hr />
          <div className="text-[1rem]">
            <table>
              <tr>
                <td className="pr-10 md:pr-20 text-gray-500">
                  Number of Pages
                </td>
                <td className="font-bold text-gray-800">{totalPages}</td>
              </tr>
              <tr>
                <td className="pr-10 md:pr-20 text-gray-500">Publisher</td>
                <td className="font-bold text-gray-800">{publisher}</td>
              </tr>
              <tr>
                <td className="pr-10 md:pr-20 text-gray-500">
                  Year of Publishing
                </td>
                <td className="font-bold text-gray-800">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="pr-10 md:pr-20 text-gray-500">Rating</td>
                <td className="font-bold text-gray-800">{rating}</td>
              </tr>
            </table>
          </div>
          <div className="flex gap-4 mt-6 md:mt-6">
            <button class="btn btn-outline px-8">Read</button>
            <button className="btn btn-info text-white px-8">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBookData;
