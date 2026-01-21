import React from "react";

const About = () => {
  return (
    <div className="flex md:flex-row flex-col py-20 gap-10 justify-center border items-center text-center ">
      <img
        src="/src/assets/aboutBooks.jpg"
        className="rounded-4xl shadow-black shadow-2xl w-70 md:w-80"
        alt=""
      />
      <div className="">
        <h1 className="text-3xl font-bold mb-5 text-pink-800">
          About The Book Haven ✨
        </h1>
        <p className="text-sm text-gray-600 font-semibold w-80">
          The Book Haven is a modern digital library where readers can discover,
          manage, and explore books with ease. Designed for simplicity and
          inspiration, it brings together timeless classics and contemporary
          stories in one organized, user-friendly platform.
        </p>
      </div>
    </div>
  );
};

export default About;
