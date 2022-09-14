require('dotenv').config();
require('./db/connection')

const express = require('express')
const app = express()
const PORT = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const User = require('./models/User');

const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require('./routes/workoutRoutes');
// const userRoutes = require('./routes/userRoutes')


// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    cookieSession({ name: "session", keys: ["anna"], maxAge: 24 * 60 * 60 * 100 })
  );
  
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Attaching all routes to app
app.use('/workouts', workoutRoutes)
app.use("/auth", authRoutes);
// app.use('/user', userRoutes)

// app.get('/', (req, res) => {
//     res.json('Welcome to Starting Strength!')
// })


app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
})