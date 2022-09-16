import { Fragment } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css"
import Background from "../assets/Background.png";

const Workout = ({ workouts }) => {
  return ( 

    <Fragment>
      <div className="grid gap-2 lg:grid-cols-3">
    {workouts.map((workout) => {
      return (
        <div  className="w-full rounded-lg shadow-md lg:max-w-sm bg-white">
        <div key={workout.id}>
          <span>{workout?.number}</span>
          {workout.exercises.map((exercise) => {
            return (
              <div key={exercise.id}>
                <iframe
                  className="object-cover w-full h-48"
                  width="395"
                  height="250"
                  src={exercise.exercise.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                

                <div className="p-4">
                  <h4 className="text-xl font-semibold text-[#1CB3B5]">
                    {exercise.exercise.name}
                    </h4>
                
                <p className="mb-2 leading-normal">{exercise.exercise.cues}</p>
                <p className="mb-2 leading-normal">Sets: {exercise.sets}</p>
                <p className="mb-2 leading-normal">Reps: {exercise.reps}</p>

                <label className="mb-2 leading-normal">
                  Check box to mark complete:
                  <input type="checkbox" />
                  </label> 
                  </div>  
              </div>
            );
          })}
          </div>
          </div>
      );
    })}
        </div>
    </Fragment>
  )
};

export default Workout;



