import React from "react";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Properties from "../pages/Properties";
import Profile from "../pages/Profile";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import Property1 from "../pages/Property1";
import Addproperty from "../pages/Addproperty";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.PROPERTIES,
      element: <Properties {...props} />,
    },
    {
      path: PATHS.PROPERTY1,
      element: <Property1 {...props} />,
    },
    {
      path: PATHS.PROFILE,
      element: <Profile {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.ADDPROPERTY,
      element: <Addproperty {...props} />,
    },
    {
      path: PATHS.ADMIN,
      element: <admin {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
