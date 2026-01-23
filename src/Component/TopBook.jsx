import React, { useEffect, useState } from "react";
import CardStyle from "./CardStyle";

const TopBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const top6 = book.sort((a, b) => b - a).slice(0, 6);

  return (
    <div className="bg-pink-50">
      <div className="text-3xl py-15  text-center text-pink-800 font-bold">
        Reader's Favourite Top 6 Books
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {top6.map((book) => (
          <CardStyle book={book}></CardStyle>
        ))}
      </div>
    </div>
  );
};

export default TopBook;
