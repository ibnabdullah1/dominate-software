import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Movie from "../Components/Movie/Movie";
import Demo from "../From/Demo";
import AddHotelName from "../Components/AddHotel/AddHotelName";
import Hotel from "../Components/AddHotel/Hotel";

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
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/hotels",
        element: <Hotel />,
      },
      {
        path: "/add-hotel-name",
        element: <AddHotelName />,
      },
      {
        path: "/:id",
        element: <Movie />,
      },
    ],
  },
]);
export default router;
