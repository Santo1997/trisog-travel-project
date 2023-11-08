import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../layouts/components/home/Home.jsx";

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
      // {
      //   path: "/instractor",
      //   element: <Instractor></Instractor>,
      // },
      // {
      //   path: "/courses",
      //   element: <Courses></Courses>,
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup></Signup>,
      // },
    ],
  },
]);

export default router;
