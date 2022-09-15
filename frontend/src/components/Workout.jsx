import { Fragment } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"


const Workout = ({ workouts }) => {
  return (
    <Fragment>
      {workouts.map((workout) => {
        return (
          <div className="card" key={workout.id}>
            <span className="title">{workout?.number}</span>
            {workout.exercises.map((exercise) => {
              return (
                <div key={exercise.id}>
                  <iframe
                    width="395"
                    height="250"
                    src={exercise.exercise.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  
                    <p className="title">{exercise.exercise.name}</p>
                    <p className="desc">{exercise.exercise.cues}</p>
                    <p className="desc">Sets: {exercise.sets}</p>
                    <p className="desc">Reps: {exercise.reps}</p>
                   
                    <label className="switch">Check box to mark complete:                      
                      <input type="checkbox" />
                  </label>
                  <br></br>                    
                </div>
              );
            })}
          </div>
        );
      })}
    </Fragment>
  );
};

export default Workout;
