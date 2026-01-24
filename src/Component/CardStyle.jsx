import React from "react";
import { Link } from "react-router";

const CardStyle = ({ book }) => {
  console.log(book);

  return (
    <div className="my-10 flex justify-center">
      <div className="group relative flex flex-col">
        <div className="relative overflow-hidden rounded shadow-black shadow-2xl">
          <img
            className="w-60 h-90 object-cover transition-transform duration-300 group-hover:scale-110"
            src={book.coverImage}
            alt={book.title}
          />

          <div
            className="absolute inset-0 bg-black/70 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Link
              to={`/book-details/${book._id}`}
              className="px-4 py-2 text-white border border-white rounded-lg
                         hover:bg-white hover:text-black transition duration-500"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="mt-3 font-semibold text-center">
          <div className="flex w-60 justify-between text-sm opacity-80">
            <span>{book.genre}</span>
            <span className="shadow-pink-00 shadow-3xl">⭐ {book.rating}</span>
          </div>
          <p className="mt-1  text-start text-sm text-black">{book.author}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStyle;
