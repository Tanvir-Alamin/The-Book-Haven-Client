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
import PrivateRoutes from "./PrivateRoutes.jsx";

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
        element: (
          <PrivateRoutes>
            <AddBook></AddBook>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-books",
        loader: () => fetch("http://localhost:3000/all-books"),
        element: (
          <PrivateRoutes>
            <MyBooks></MyBooks>
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <BookDetails></BookDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
