import React from "react";
import { useLoaderData } from "react-router";
import CardStyle from "../Component/CardStyle";

const AllBooks = () => {
  const data = useLoaderData();

  return (
    <div className="grid bg-pink-50 grid-cols-3 place-items-center">
      {/* <div>{data.length}</div> */}
      {data.map((book) => (
        <CardStyle book={book}></CardStyle>
      ))}
    </div>
  );
};

export default AllBooks;
