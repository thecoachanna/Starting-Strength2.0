import React from "react";
import { useEffect, useState } from "react";
import Workout from "../components/Workout";
import "../App.css";

const Workouts = ({ exercises }) => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    fetch("https://starting-strength-backend.herokuapp.com/workouts")
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
