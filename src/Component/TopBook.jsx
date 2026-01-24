import React, { useContext, useEffect, useState } from "react";
import CardStyle from "./CardStyle";
import { AuthContext } from "../Context/AuthContext";

const TopBook = () => {
  const { setLoading } = useContext(AuthContext);
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => {
        (setBook(data), setLoading(false));
      });
  }, []);
  const top6 = book.sort((a, b) => b.rating - a.rating).slice(0, 6);

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
