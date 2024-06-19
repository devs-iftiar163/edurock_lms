import Layouts from "../components/Layouts/Layouts";
import Aboutus from "../pages/About/Aboutus";
import Home from "../pages/Home/Home";

const publicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
    ],
  },
];

export default publicRouter;
