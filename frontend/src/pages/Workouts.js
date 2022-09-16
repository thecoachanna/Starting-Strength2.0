import React from "react";
import { useEffect, useState } from "react";
import Workout from "../components/Workout";
import Background from '../assets/Background.png'
import "../App.css";

const Workouts = ({ exercises }) => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/workouts/home")
      .then((res) => res.json())
      .then((exercise) => setWorkout(exercise));
  }, []);

  return (
 
        <div className="bg-[#F4F4F4]">
          <Workout workouts={workout} />
        </div>
  
  );
};

export default Workouts;
