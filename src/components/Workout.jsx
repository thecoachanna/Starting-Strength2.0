import { Fragment } from "react";

const Workout = ({ workouts }) => {
  return (
    <Fragment>
      <div className="py-24">
        <h1 className="text-center text-[#2B2B46] text-4xl weight-">
          Starting Strength Workouts
        </h1>
        <br></br>
        <h1 className="text-center text-[#2B2B46] text-2xl">
          Below you'll find 6 weeks of progressive strength training workouts. <strong className="text-[#1CB3B5]">Designed for true beginners.</strong>
        </h1>
        <h1 className="text-center text-[#2B2B46] text-2xl">
          Be sure to check out the Training Tips page for commonly asked questions.
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 content-center mt-2 mx-auto space-around">
        {workouts.map((workout) => {
          return (
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-white ">
              <div key={workout.id}>
                <span>{workout?.number}</span>
                {workout?.exercises?.map((exercise) => {
                  return (
                    <div key={exercise.id}>
                      <iframe
                        className="object-cover w-full h-48"
                        width="395"
                        height="250"
                        src={exercise.exercise.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      <div className="p-4">
                        <h4 className="text-xl font-semibold text-[#1CB3B5]">
                          {exercise.exercise.name}
                        </h4>

                        <p className="mb-2 leading-normal">
                          {exercise.exercise.cues}
                        </p>
                        <p className="mb-2 leading-normal">
                          Sets: {exercise.sets}
                        </p>
                        <p className="mb-2 leading-normal">
                          Reps: {exercise.reps}
                        </p>

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
  );
};

export default Workout;
