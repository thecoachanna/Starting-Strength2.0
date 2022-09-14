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
        axios.post('http://localhost:4000/user/login', formData)
        .then(res => {
            console.log(res)
            if(res.status === 200){
                setUser(res.data)
                navigate('/workouts/home')
            }
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
            <input className="leftInput" type="text" placeholder="Username" onChange={handleChange}/>
            <input className="leftInput" type="text" placeholder="Password" onChange={handleChange}/>
            <button className="loginButton user" onSubmit={handleSubmit}>Login</button>
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
          <input className="rightInput" type="text" placeholder="Username" />
          <input className="rightInput" type="text" placeholder="Password" />
          <button className="submit" >Register</button>
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