import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Movie from "../Components/Movie/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/:id",
        element: <Movie />,
      },
    ],
  },
]);
export default router;
