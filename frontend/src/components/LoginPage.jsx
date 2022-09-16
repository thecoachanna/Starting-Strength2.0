import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import Background from "../assets/Background.png";

const LoginPage = ({ setUser }) => {
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
              navigate('/workouts')
          
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
              navigate('/workouts')
          
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
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className="hidden sm:block">
        <img src={Background} alt="" className="w-full h-full object-cover" />
      </div>
      <div className='flex justify-center items-center h-full'>
        <div className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
            <div className='flex justify-between py-8'>
                <div className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FaGithub className='mr-2' onClick={github}/> Github</div>
                <div className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' onClick={google} /> Google</div>
            </div>
            <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' name="username" type="text" onChange={handleChange}/>
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' name="password" type="password" onChange={handleChange}/>
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            </form>
          
          <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


