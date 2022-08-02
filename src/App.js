import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import Footer from "./components/Navbar/Footer";

//pages
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Properties from "./pages/Properties";
import Profile from "./pages/Profile";
import Property1 from "./pages/Property1";
import Admin from "./pages/Admin";




export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      navigate("/auth/login");
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element= {<HomePage />}/>
        <Route path= "/auth/login" element={<LogIn authenticate={authenticate}/>} />
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>}/>
        <Route path="/properties" element={<Properties/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/property1" element={<Property1/>}/>
        <Route path="/admin/id" element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
