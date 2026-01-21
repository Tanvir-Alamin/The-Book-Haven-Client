import React, { useState } from "react";

const Genre = () => {
  const [gen, setGen] = useState([]);
  const Genres = fetch("/genres.json")
    .then((res) => res.json())
    .then((data) => setGen(data));

  return (
    <div className="py-25">
      <h1 className="text-4xl font-bold text-center mb-15  text-shadow-[2px_2px_8px_rgba(0,0,0,0.4)]  text-pink-800">
        Popular Genres Readers Love
      </h1>
      <div className="grid grid-cols-2 mx-15 md:grid-cols-3  gap-10">
        {gen.map((result) => (
          <div
            key={result.id}
            className="flex   p-5 rounded-3xl shadow-xl shadow-pink-200 bg-pink-50 transition-transform hover:shadow-2xl hover:border-pink-800 duration-300 hover:scale-110  gap-2 items-center flex-col text-center justify-center"
          >
            <h1 className="text-5xl">{result.emoji}</h1>
            <p className="text-pink-800 font-bold text-2xl">{result.genre}</p>
            <p className="w-70 text-gray-800 font-semibold text-sm  md:text-lg">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
