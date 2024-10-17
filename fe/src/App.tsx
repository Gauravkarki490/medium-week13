import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { Publish } from "./pages/Publish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/blogs",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Blogs />,
      },
      {
        path: "publish",
        element: <Publish />,
      },
      {
        path: ":id",
        element: <Blog />,
      },
    
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
