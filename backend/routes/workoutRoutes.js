const router = require('express').Router()
const workoutController = require('../controllers/workoutController')


// GET all exercises
router.get('/', workoutController.index)

router.get('/home', workoutController.getWorkout)

router.post('/', workoutController.createWorkout)

// GET a single exercise
router.get('/:id', workoutController.getOneExercise)

router.delete('/:id', workoutController.deleteWorkout)

module.exports = router;