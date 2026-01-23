import React from "react";
import { Link, useLoaderData } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();

  return (
    <div className="flex my-20 gap-15 justify-center items-center">
      <img
        className="w-60 h-90 hover:scale-110 rounded shadow-black shadow-2xl object-cover transition-transform duration-300 group-hover:scale-110"
        src={data.coverImage}
        alt=""
      />
      <div className="flex flex-col">
        <div className="text-2xl py-3 md:text-5xl  font-bold">{data.title}</div>
        <div className="mb-8">{data.genre}</div>
        <div className="flex mb-5 flex-col gap-10 ">
          <div className="font-semibold  font-mono text-lg">{data.author}</div>
          <div className="italic w-35 md:w-110 font-light font-serif">
            {data.summary}
          </div>
        </div>
        <div>
          <Link className="btn hover:scale-103 transition-transform duration-300 w-33 text-white bg-pink-800 text-xs">
            Update Details
          </Link>
          <Link className="btn w-33 hover:scale-103 transition-transform duration-300 text-white bg-red-600 text-xs">
            Delete Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
