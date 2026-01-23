import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex items-center  gap-10 py-25 bg-pink-50 justify-center">
      <img
        className="rounded-4xl  shadow-black shadow-2xl w-70 md:w-80"
        src="/src/assets/banner.jpg"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <p className="text-3xl text-pink-800 font-bold">The Book Haven</p>
        <p className="md:w-70 w-45 ml-1 text-sm text-gray-600">
          The Book Haven is a modern digital library built for curious minds and
          passionate readers. Discover timeless classics, powerful modern
          literature, and inspiring stories all in one place. Explore, organize,
          and manage books effortlessly while turning every visit into a
          meaningful reading experience.
        </p>
        <div className="flex md:flex-row flex-col gap-2">
          <Link
            className="btn w-35 text-white bg-pink-800 p-5 text-sm"
            to="/all-books"
          >
            All Books
          </Link>
          <Link className="btn p-5 w-35 text-sm border-black" to="/add-book">
            Create Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
