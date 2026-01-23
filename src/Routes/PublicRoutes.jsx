import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import AllBooks from "../Pages/AllBooks.jsx";
import AddBook from "../Pages/AddBook.jsx";
import MyBooks from "../Pages/MyBooks.jsx";
import LogIn from "../Pages/LogIn.jsx";
import Register from "../Pages/Register.jsx";
import BookDetails from "../Pages/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-books",
        loader: () => fetch("http://localhost:3000/all-books"),
        Component: AllBooks,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "my-books",
        Component: MyBooks,
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "book-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book-details/${params.id}`),
        Component: BookDetails,
      },
    ],
  },
]);
export default router;
