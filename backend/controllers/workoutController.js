const Exercise = require('../models/Exercise')
const Workout = require('../models/Workouts')


// GET all exercises
const index = (req, res) => {
    Exercise.find({}, (err, exercise)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(exercise)

    })
}

// GET a single exercise
const getOneExercise = (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(exercise)
    })
}

// create a single exercise
const createOneExercise = (req, res) => {
    console.log(req.body)
    Exercise.create(req.body)
        .then(response => {
        res.json(response)
        })
        .catch(err => {
        res.status(500).send(err.message)
    })
}

// create workout
const createWorkout = async (req, res) => {
    
    let exerciseId = req.body.value   
       
    let newWorkout = await Workout.create({ exercises: req.body.selectedExercise, workoutNumber: req.body.workoutNumber })
    console.log(newWorkout)
    res.json(newWorkout)
}

const getWorkout = (req, res) => {
    Workout.find().populate({ path: 'exercises.exercise', model: 'Exercise'}).then((workout, e) => {
        res.json(workout)
    })
}

const deleteWorkout = (req, res) => {
    let { id } = req.params
    Workout.findByIdAndDelete(id, err, deleteWorkout)
        if (err) {
            res.status(400).json(err)
            return
        }
    res.json(deleteWorkout)
}

module.exports = {
    
    index,
    getOneExercise,
    getWorkout,
    createWorkout,
    deleteWorkout
    
}