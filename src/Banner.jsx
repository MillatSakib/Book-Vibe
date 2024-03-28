import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex min-h-[80vh] bg-slate-50 max-w-[95%] mx-auto my-6 rounded-lg justify-around items-center flex-col md:flex-row py-4">
      <div className="text-center md:text-left md:pl-10">
        <div className="text-2xl md:text-4xl lg:text-5xl font-semibold w-[100%] md:max-w-[60%] my-10">
          Books to freshen up your bookshelf
        </div>
        <div>
          <Link to="/listedbooks" className="btn btn-success text-white">
            View The List
          </Link>
        </div>
      </div>
      <div className="md:pr-10 mt-8">
        <img src="https://raw.githubusercontent.com/MillatSakib/img-src/main/assignment8/cover.png" />
      </div>
    </div>
  );
};

export default Banner;
