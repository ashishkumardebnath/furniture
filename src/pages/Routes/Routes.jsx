import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import Contact from "../Home/Contact/Contact";
import Login from "../Home/Login/Login";
import SignUp from "../Home/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
