import React, { Fragment } from "react";

const Exercise = ({ exercises }) => {
  console.log(exercises);

  return (
    <Fragment>      
      {exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <h4>{exercise?.name}</h4>
            <p>{exercise?.cues}</p>
            <iframe width="450" height="250" src={exercise.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Exercise;