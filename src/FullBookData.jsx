import React from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FullBookData = () => {
  const bookFullData = useLoaderData();
  const handelReadBook = () => {
    const alreadyRead = () => toast.error("You have already read this book");
    const read = () => toast("Added in read list");

    const setLocalData = bookFullData;
    let avialablityReadBook = String(localStorage.getItem("readBook"));
    const stringData = JSON.stringify(setLocalData);
    if (avialablityReadBook === "null") {
      localStorage.setItem("readBook", stringData);

      read();
    } else {
      // readDataFromLocal = JSON.parse(readData);
      // console.log(readData[0].bookId);
      avialablityReadBook = JSON.parse(localStorage.getItem("readBook")).find(
        (localData) => localData.bookId === setLocalData[0].bookId
      );
      //
      if (avialablityReadBook) {
        console.log("Book Has Local Storage");
        alreadyRead();
      } else {
        let temp = JSON.parse(localStorage.getItem("readBook"));
        temp.push(setLocalData[0]);
        localStorage.setItem("readBook", JSON.stringify(temp));
        read();
      }
    }
  };
  const handelWishList = (wishListData) => {
    const alreadyWishList = () =>
      toast.error("You have already added this book on wishlist");
    const readedBook = () => toast.error("Readed book can't add on wishlist");
    const wishList = () => toast("Added in wishlist");
    const setLocalData = bookFullData;

    let avialablityReadBook = String(localStorage.getItem("readBook"));
    const stringData1 = JSON.stringify(setLocalData);
    avialablityReadBook = JSON.parse(localStorage.getItem("readBook")).find(
      (localData) => localData.bookId === setLocalData[0].bookId
    );
    //
    if (avialablityReadBook) {
      readedBook();
      return;
    }

    let avialablityWishList = String(localStorage.getItem("wishList"));
    const stringData = JSON.stringify(setLocalData);
    if (avialablityWishList === "null") {
      localStorage.setItem("wishList", stringData);
      wishList();
    } else {
      // readDataFromLocal = JSON.parse(readData);
      // console.log(readData[0].bookId);
      avialablityWishList = JSON.parse(localStorage.getItem("wishList")).find(
        (localData) => localData.bookId === setLocalData[0].bookId
      );
      //
      if (avialablityWishList) {
        // console.log("Book Has Local Storage");
        alreadyWishList();
      } else {
        let temp = JSON.parse(localStorage.getItem("wishList"));
        temp.push(setLocalData[0]);
        localStorage.setItem("wishList", JSON.stringify(temp));

        wishList();
      }
    }
  };

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
              {tags.map((tag, index) => (
                <span
                  key={index + 5210}
                  className="text-green-400 bg-gray-200 mx-2 rounded-full px-4 py-1"
                >
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
            <button
              className="btn btn-outline px-8"
              onClick={() => handelReadBook(bookFullData)}
            >
              Read
            </button>
            <button
              className="btn btn-info text-white px-8"
              onClick={() => handelWishList(bookFullData)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FullBookData;
