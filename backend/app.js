require('dotenv').config();
require('./db/connection')

const express = require('express')
const app = express()
const PORT = 4000
const cors = require('cors')
const bodyParser = require('body-parser')


const workoutRoutes = require('./routes/workoutRoutes');




// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Attaching all routes to app
app.use('/workouts', workoutRoutes)
// app.use('/user', userRoutes)

// app.get('/', (req, res) => {
//     res.json('Welcome to Starting Strength!')
// })


app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
})