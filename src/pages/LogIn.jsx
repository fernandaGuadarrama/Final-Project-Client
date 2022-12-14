import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";


export default function LogIn({ authenticate }) {
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
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      if(res.data.user.role == "admin"){
        navigate("/admin");
      }else{
        navigate("/");
      }
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
          <h1 className="Auth-form-title">Welcome back</h1>
          <br/>
          <div className="text-center">
            Sign In
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
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
              required
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
  );
}
