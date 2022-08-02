import React, { useState } from "react";
import { signup } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { MDBCheckbox } from 'mdb-react-ui-kit';

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
    email: "",
    fullName: ""
  });
  const { username, password, role, email, fullName} = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      role,
      email,
      fullName
    };
    console.log(credentials)
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
      <>
      <br/>
      <br/>
       <div className="Auth-form-container" style={{ 
        justifyContent: 'center',
        display: "flex",
        alignItems: 'center',
        alignContent: 'center'}}>
      <form className="Auth-form" onSubmit={handleFormSubmission}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Register</h1>
          <br/>
          <div className="text-center">
            Already registered?{" "}
            <Link className="link-primary" to="/auth/login">
              Log In
            </Link>
          </div>
          <h4 className="Auth-form-title">Sign In</h4>
          
             <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g janedoe@xxx.com"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <br/>
             <div className="form-group mt-3">
            <label>User</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="e.g Jane_Doe"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <br/>
           </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-black" >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    <br/>
    <br/>
    </>
  )
}

