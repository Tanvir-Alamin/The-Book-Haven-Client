import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import CardStyle from "../Component/CardStyle";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Component/Loader";

const AllBooks = () => {
  const data = useLoaderData();
  const { loading } = useContext(AuthContext);
  if (loading) return <Loader></Loader>;

  return (
    <div className="grid  grid-cols-3 place-items-center">
      {/* <div>{data.length}</div> */}
      {data.map((book) => (
        <CardStyle key={book._id} book={book}></CardStyle>
      ))}
    </div>
  );
};

export default AllBooks;
