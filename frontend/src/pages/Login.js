import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Google from "../assets/google.png";
import Github from "../assets/github.png";

const Login = ({setUser}) => {
  const navigate = useNavigate()
    const [formData, setFormData] = React.useState()
    
  
  const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const fData = new FormData (e.target)
      axios.post('http://localhost:4000/user/login', {
        username: fData.get("username"),
        password: fData.get("password")
      })
      .then(res => {
          console.log(res)
          
              setUser(res.data)
              navigate('/workouts/home')
          
      })
        .catch(err => {
        alert(err.message)
      })
        
    }
  
    const handleRegister = (e) => {
      e.preventDefault()
      const fData = new FormData (e.target)
      axios.post('http://localhost:4000/user/register', {
        username: fData.get("username"),
        password: fData.get("password")
      })
      .then(res => {
          console.log(res)
          
              setUser(res.data)
              navigate('/workouts/home')
          
      })
        .catch(err => {
        alert(err.message)
      })
  }


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
          
            <div className="left">
              <form onSubmit={handleSubmit}>
            <input className="leftInput" type="text" name="username" placeholder="Username" onChange={handleChange}/>
            <input className="leftInput" type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <button className="loginButton user" >Login</button>
                </form>
            </div>
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
          <input className="rightInput" type="text" name="username" placeholder="Username" />
          <input className="rightInput" type="password" name="password" placeholder="Password" />
              <button className="submit" >Register</button>
              </form>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;



// const [registerUsername, setRegisterUsername] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [data, setData] = useState(null);

//   const registerUser = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: registerUsername,
//         password: registerPassword,
//       },
//       withCredentials: true,
//       url: "http://localhost:4000/register",
//     }).then((res) => console.log(res));
//   };

//   const loginUser = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: loginUsername,
//         password: loginPassword,
//       },
//       withCredentials: true,
//       url: "http://localhost:4000/login",
//     }).then((res) => console.log(res));
//   };

//   const getUser = () => {
//     Axios({
//       method: "GET",
//       withCredentials: true,
//       url: "http://localhost:4000/user",
//     }).then((res) => {
//       setData(res.data);
//       console.log(res.data);
//     });
//   };