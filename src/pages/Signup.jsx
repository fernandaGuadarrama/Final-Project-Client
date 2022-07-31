import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
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
    };
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
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Welcome back</h1>
          <br/>
          <h4 className="Auth-form-title">Sign In</h4>
          <br/>
             <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-black">
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
    // <div>
    //   <h1 classNameNameName="signup">Sign Up</h1>
    //   <form onSubmit={handleFormSubmission} classNameNameName="auth__form">
    //     <label htmlhtmlhtmlFor="input-username">Username</label>
    //     <input
    //       id="input-username"
    //       type="text"
    //       name="username"
    //       placeholder="Text"
    //       value={username}
    //       onChange={handleInputChange}
    //       required
    //     />

    //     <label htmlhtmlhtmlFor="input-password">Password</label>
    //     <input
    //       id="input-password"
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleInputChange}
    //       required
    //       minLength="8"
    //     />

    //     {error && (
    //       <div classNameNameName="error-block">
    //         <p>There was an error submiting the form:</p>
    //         <p>{error.message}</p>
    //       </div>
    //     )}

    //     <button classNameNameName="button__submit" type="submit">
    //       Submit
    //     </button>
    //   </form>
    // </div>

