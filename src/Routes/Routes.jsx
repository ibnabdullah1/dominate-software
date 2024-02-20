import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Movie from "../Components/Movie/Movie";
import Demo from "../From/Demo";
import AddHotelName from "../Components/AddHotel/AddHotelName";
import Hotel from "../Components/AddHotel/Hotel";
import Rooms from "../Components/AddHotel/Rooms";
import RoomType from "../Components/AddHotel/RoomType";
import BedType from "../Components/AddHotel/BedType";
import HotelFacility from "../Components/AddHotel/HotelFacility";
import HotelFacilityType from "../Components/AddHotel/HotelFacilityType";
import HotelSearch from "../Components/AddHotel/HotelSearch";

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
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/room-type",
        element: <RoomType />,
      },
      {
        path: "/bed-type",
        element: <BedType />,
      },
      {
        path: "/hotel-facilities",
        element: <HotelFacility />,
      },
      {
        path: "/facility-types",
        element: <HotelFacilityType />,
      },
      {
        path: "/add-hotel-name",
        element: <AddHotelName />,
      },
      {
        path: "/hotel-search",
        element: <HotelSearch />,
      },
      {
        path: "/:id",
        element: <Movie />,
      },
    ],
  },
]);
export default router;
