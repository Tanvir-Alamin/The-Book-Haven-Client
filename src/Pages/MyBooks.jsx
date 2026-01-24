import React, { useContext } from "react";
import CardStyle from "../Component/CardStyle";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import notFound from "../assets/noData.png";
const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const sortData = data?.filter((res) => res.userEmail == user?.email);
  if (sortData.length == 0)
    return (
      <div>
        <div className="text-center font-bold font-serif text-pink-800   pt-5 text-3xl">
          <p>You have added total {sortData.length} book</p>
        </div>
        <img
          className="w-100 shadow-2xl shadow-black my-5 mx-auto"
          src={notFound}
          alt=""
        />
      </div>
    );
  return (
    <div className="bg-pink-100">
      <div className="text-center font-bold font-serif text-pink-800   pt-15 text-3xl">
        <p>You have added total {sortData.length} book</p>
      </div>
      <div className="grid  grid-cols-3 place-items-center">
        {sortData.map((book) => (
          <CardStyle book={book}></CardStyle>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
