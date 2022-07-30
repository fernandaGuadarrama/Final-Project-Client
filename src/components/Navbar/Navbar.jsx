import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav> 
  
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="/Logo.png"
          width="26"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/auth/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/auth/login">Log in</Link>
        </li>
      </ul>

          <img
            src="https://pbs.twimg.com/profile_images/1551459684426682369/VR61hq8m_400x400.jpg"
            className="rounded-circle"
            height="25"
            alt="Your Profile picture"
            loading="lazy"
          />
          <li className="nav-item">
          <Link className="nav-link" to="/profile">Your listings...</Link>
        </li>
      </div>
        </div>
</nav>
    </nav>
  );
};

export default Navbar;