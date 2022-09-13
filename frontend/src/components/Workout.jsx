import { Fragment } from 'react'

const Workout = ({workouts}) => {
  return (
    <Fragment>      
    {workouts.map((workout) => {
      return (
        <div key={workout.id}>
              <h4>{workout?.number}</h4>
              {workout.exercises.map((exercise) => {
                  return (
                <div key={exercise.id}>
                          <p>{exercise.exercise.name}</p>
                          <iframe width="450" height="250" src={exercise.exercise.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <p>{exercise.exercise.cues}</p>
                          <p>Sets: {exercise.sets}</p>
                          <p>Reps: {exercise.reps}</p>
                          </div>
                  )
              })}          
        </div>
      );
    })}
  </Fragment>
  )
}

export default Workout
