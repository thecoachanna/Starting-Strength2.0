import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
          <div className="container">
            <Link to="/workouts/home">Starting Strength</Link>
            <Link to="workouts/trainingtips">Training Tips</Link>
            <Link to="workouts/new">Create Workout</Link>
          </div>
    </header>
  )
}

export default Navbar