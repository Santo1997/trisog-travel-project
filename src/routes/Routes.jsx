import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../layouts/components/home/Home.jsx";
import Destination from "../layouts/components/destination/Destination.jsx";
import About from "../layouts/components/about/About.jsx";
import Login from "../layouts/components/login/Login.jsx";
import Signup from "../layouts/components/signup/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    // loader: () => fetch(`https://assign12-camp-server.vercel.app/courses`),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
