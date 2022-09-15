import React from 'react'
import { useEffect, useState } from 'react'
import Workout from '../components/Workout'
import "../App.css"

const Workouts = ({ exercises }) => {
    const [workout, setWorkout] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/workouts/home')
    .then( res => res.json())
    .then( exercise => setWorkout(exercise))
  }, [])

  return (
      <div>
           <Workout workouts={workout} />
    </div>
  )
}

export default Workouts