import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Google from "../assets/google.png";
import Github from "../assets/github.png";
import "../App.css";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fData = new FormData(e.target);
    axios
      .post("http://localhost:4000/user/login", {
        username: fData.get("username"),
        password: fData.get("password"),
      })
      .then((res) => {
        console.log(res);

        setUser(res.data);
        navigate("/workouts");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const fData = new FormData(e.target);
    axios
      .post("http://localhost:4000/user/register", {
        username: fData.get("username"),
        password: fData.get("password"),
      })
      .then((res) => {
        console.log(res);

        setUser(res.data);
        navigate("/workouts");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

  return (
    <div className="bg-[#F4F4F4]">
      
      <div className="login">
        <div className="wrapper">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <h1 className="">Login</h1>
              <input
                className="leftInput"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                className="rightInput"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button className="loginButton user">Login</button>
            </form>

            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <form onSubmit={handleRegister}>
              <h1 className="">Register</h1>
              <input
                className="rightInput"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="rightInput"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
