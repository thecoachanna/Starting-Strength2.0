import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "./App.css"

// pages + components
import Home from './pages/Home';
import Login from "./pages/Login";
// import Navbar from './components/Navbar';
import TrainingTips from "./pages/TrainingTips";
import NewWorkout from './pages/NewWorkout';
// import Workout from './components/Workout'

function App() {
  const [exercises, setExercises] = useState([])
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  useEffect(() => {
    fetch('http://localhost:4000/workouts/')
    .then( res => res.json())
    .then( exercise => setExercises(exercise))
  }, [])
  
  console.log(exercises)

  return (
    <div className="App">
      
      {/* <Navbar user={user} /> */}
            <Routes>
              <Route path='/workouts' element={<Home exercises={exercises} />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />          
              <Route path='/workouts/new' element={ <NewWorkout exercises={exercises}/>} />
              <Route path='/workouts/tips' element={ <TrainingTips />} />
            </Routes>
      
    </div>
  );
}

export default App;
