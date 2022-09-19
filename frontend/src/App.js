import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";


// pages + components
import Home from './pages/Home';
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import TrainingTips from "./pages/TrainingTips";
import NewWorkout from './pages/NewWorkout';
import Workout from './components/Workout'
import Workouts from './pages/Workouts'

function App() {
  const [exercises, setExercises] = useState([])
  const [user, setUser] = useState(null);
  const [workout, setWorkout] = useState([])

  
  useEffect(() => {
    fetch('https://starting-strength-backend.herokuapp.com/workouts/')
    .then( res => res.json())
    .then( exercise => setExercises(exercise))
  }, [])

  useEffect(() => {
    fetch('https://starting-strength-backend.herokuapp.com/workouts/')
    .then( res => res.json())
    .then( exercise => setWorkout(exercise))
  }, [])
  

  return (
    <div className="App">
      
      <Navbar user={user} />
            <Routes>
              <Route path='/workouts/home' element={<Home />} />
              <Route path='/workouts' element={<Workouts workouts={workout} />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />          
              <Route path='/workouts/new' element={ <NewWorkout exercises={exercises}/>} />
              <Route path='/workouts/tips' element={ <TrainingTips />} />
            </Routes>
      
    </div>
  );
}

export default App;
