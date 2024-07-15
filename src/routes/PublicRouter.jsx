import Layouts from "../components/Layouts/Layouts";
import Aboutus from "../pages/About/Aboutus";
import Login from "../pages/Auth/Login";
import LoginRegister from "../pages/Auth/LoginRegister";
import Register from "../pages/Auth/Register";
import Contactus from "../pages/Contact/Contactus";
import Course from "../pages/Course/Course";
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
      {
        path: "/course-listings",
        element: <Course />,
      },
      {
        path: "/contact-us",
        element: <Contactus />,
      },
      {
        path: "/login-register",
        element: <LoginRegister />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
];

export default publicRouter;
