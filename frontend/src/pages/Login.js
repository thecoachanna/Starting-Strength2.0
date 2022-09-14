import React, { useState } from "react";
import Axios from "axios";
import Google from "../assets/google.png";
import Github from "../assets/github.png";

const Login = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const registerUser = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  const loginUser = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

  return (
    <div className="">
    <div className="login">
      <h1 className="loginTitle">Login OR Register</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
          <div className="left">
            <input className="leftInput" type="text" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)}/>
            <input className="leftInput" type="text" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
            <button className="loginButton user" onClick={loginUser}>Login</button>
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input className="rightInput" type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)}/>
          <input className="rightInput" type="text" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
          <button className="submit" onClick={registerUser}>Register</button>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;