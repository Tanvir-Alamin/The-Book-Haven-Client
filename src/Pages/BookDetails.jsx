import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [errors, setErrors] = useState("");
  const data = useLoaderData();
  const mongoDbMail = data.userEmail;
  const userMail = user?.email;

  const isOwner = mongoDbMail === userMail;

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = e.target.userEmail.value;
    const updatedData = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail,
    };
    const titleRegex = /^[A-Za-z0-9 ]{2,100}$/;
    const authorRegex = /^[A-Za-z ]{2,50}$/;
    const genreRegex = /^[A-Za-z ,.]{0,30}$/;
    const ratingRegex = /^(?:[1-4](?:\.[0-9])?|5(?:\.0)?)$/;
    // const summaryRegex = /^[A-Za-z0-9  ,.!?'"-]{10,500}$/;
    const imageUrlRegex = /^(https?:\/\/.*\.(png|jpg|jpeg|webp))$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors("");
    if (!titleRegex.test(title)) {
      return setErrors("Title must be 2–100 characters.");
    }

    if (!authorRegex.test(author)) {
      return setErrors("Author name must contain only letters.");
    }

    if (!genreRegex.test(genre)) {
      return setErrors("Genre must contain only letters.");
    }

    if (!ratingRegex.test(rating)) {
      return setErrors("Rating must be between 1.0 and 5.0.");
    }

    if (summary.trim().length < 10) {
      return setErrors("Summary must be at least 10 characters.");
    }

    if (!imageUrlRegex.test(coverImage)) {
      return setErrors("Invalid image URL.");
    }

    if (!emailRegex.test(userEmail)) {
      return setErrors("Invalid email address.");
    }
    fetch(`http://localhost:3000/book-details/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToggle(false);
      }) // Log the server's response

      .catch((error) => console.error("Error:", error));
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/book-details/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Delete Successful",
          text: `Book has been deleted`,
          icon: "success",
        });
        navigate("/all-books");
      });
  };

  return (
    <div className="flex items-center  my-20 md:flex-row flex-col justify-center">
      {" "}
      <div className="flex gap-15 justify-center items-center">
        <img
          className="w-60 h-90 hover:scale-110 rounded shadow-black shadow-2xl object-cover transition-transform duration-300 group-hover:scale-110"
          src={data.coverImage}
          alt=""
        />
        <div className="flex my-25 flex-col">
          <div className="text-2xl py-3 md:text-5xl  font-bold">
            {data.title}
          </div>
          <div className="flex gap-7">
            {" "}
            <div className="mb-8">{data.genre}</div> <div>⭐{data.rating}</div>
          </div>
          <div className="flex mb-5 flex-col gap-10 ">
            <div className="font-semibold  font-mono text-lg">
              {data.author}
            </div>
            <div className="italic w-35 md:w-110 font-light font-serif">
              {data.summary}
            </div>
          </div>
          {isOwner ? (
            <div>
              <Link
                
                onClick={() => setToggle(!toggle)}
                className="btn hover:scale-103 transition-transform duration-300 w-33 text-white bg-pink-800 text-xs"
              >
                Update Details
              </Link>
              <Link
                onClick={() => handleDelete(data._id)}
                className="btn w-33 hover:scale-103 transition-transform duration-300 text-white bg-red-600 text-xs"
              >
                Delete Book
              </Link>
            </div>
          ) : (
            <div className="text-xs italic font-semibold underline underline-offset-4 font-serif">
              "Create/Add Your Book to update or delete"
            </div>
          )}
        </div>
      </div>
      <div>
        {toggle ? (
          <form
            onReset={() => {
              setErrors("");
              setToggle(false);
            }}
            onSubmit={handleSubmit}
            className="bg-pink-50 shadow-black shadow-2xl p-6 rounded-lg  w-96 max-h-full overflow-y-auto"
          >
            <h2 className="text-2xl text-pink-800 font-bold mb-4">
              Update Book Details
            </h2>

            <input
              type="text"
              name="title"
              placeholder={data.title}
              className="w-full border p-2 mb-3 rounded"
              required
            />
            <input
              type="text"
              name="author"
              placeholder={data.author}
              className="w-full border p-2 mb-3 rounded"
              required
            />
            <input
              type="text"
              name="genre"
              placeholder={data.genre}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="number"
              name="rating"
              placeholder={data.rating}
              step="0.1"
              min="1"
              max="5"
              className="w-full border p-2 mb-3 rounded"
            />
            <textarea
              name="summary"
              placeholder={data.summary}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              name="coverImage"
              placeholder={data.coverImage}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="email"
              name="userEmail"
              placeholder={data.userEmail}
              className="w-full border mt-3 p-2 mb-3 rounded"
            />
            {errors ? <div className="text-red-700">{errors}</div> : ""}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="reset"
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="px-4 py-2 hover:text-white rounded border hover:bg-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="hover:bg-pink-600 text-black border-1 hover:text-white px-4 py-2 rounded "
              >
                Update
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookDetails;
