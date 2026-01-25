import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const titleRegex = /^[A-Za-z0-9 --,.']{2,100}$/;
    // const authorRegex = /^[A-Za-z ]{2,50}$/;
    // const genreRegex = /^[A-Za-z --; : "', .]{0,30}$/;
    const ratingRegex = /^(?:[1-4](?:\.[0-9])?|5(?:\.0)?)$/;
    // const summaryRegex = /^[A-Za-z0-9 ,.!?'"-]{10,500}$/;
    const imageUrlRegex = /^(https?:\/\/.*\.(png|jpg|jpeg|webp))$/;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = e.target.userEmail.value;
    const newBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail,
    };
    setErrors("");
    // if (!titleRegex.test(title)) {
    //   return setErrors("Title must be 2–100 characters.");
    // }

    // if (!authorRegex.test(author)) {
    //   return setErrors("Author name must contain only letters.");
    // }

    if (!ratingRegex.test(rating)) {
      return setErrors("Rating must be between 1.0 and 5.0.");
    }
    if (summary.trim().length < 10) {
      return setErrors("Summary must be at least 10 characters.");
    }

    if (!imageUrlRegex.test(coverImage)) {
      return setErrors("Invalid image URL.");
    }

    // if (!emailRegex.test(userEmail)) {
    //   return setErrors("Invalid email address.");
    // }

    setErrors("");
    fetch(`https://the-book-haven-server-three.vercel.app/all-books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        (console.log(data),
          navigate("/all-books"),
          Swal.fire({
            title: `${title} Added Successfully`,
            text: `Book has been Added`,
            icon: "success",
          }));
      })

      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
      className=" min-h-screen bg-cover bg-center bg-no-repeat py-25 "
      style={{
        backgroundImage: "url('https://i.ibb.co.com/7tSM700c/aot.jpg')",
      }}
    >
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-pink-50 opacity-88 border shadow-black shadow-2xl p-6 rounded-lg  w-96 max-h-full overflow-y-auto"
        >
          <h2 className="text-2xl  text-center text-pink-800 font-bold mb-4">
            Add Your Book Details
          </h2>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add Book Title"
            title="Title must be 2–100 characters (letters & numbers only)"
            required
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Author Name</label>

          <input
            type="text"
            name="author"
            placeholder="Add Author Name"
            title="Author name should contain only letters"
            required
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Genre</label>

          <input
            type="text"
            name="genre"
            placeholder="Add Genre"
            title="Genre should contain only letters"
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Rating</label>

          <input
            type="number"
            name="rating"
            step="0.1"
            min="1"
            max="5"
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Summary</label>

          <textarea
            name="summary"
            placeholder="Add Summary"
            title="Summary must be at least 10 characters"
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Image URL</label>

          <input
            type="text"
            name="coverImage"
            placeholder="Add Image URL"
            title="Enter a valid image URL (jpg, png, webp)"
            className="w-full border p-2 mb-3 rounded"
          />

          <label className="label">Email</label>

          <input
            type="email"
            name="userEmail"
            placeholder={""}
            value={user?.email}
            className="w-full border p-2 mb-3 rounded"
          />
          {errors ? <div className="text-red-700">{errors}</div> : ""}

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 hover:text-white rounded border hover:bg-red-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="hover:bg-pink-600 text-black border-1 hover:text-white px-4 py-2 rounded "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
