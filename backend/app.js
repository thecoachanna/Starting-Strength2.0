require('dotenv').config();
require('./db/connection')

const PORT = process.env.PORT || 4000;
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passportSetup = require("./passport");
const passport = require("passport");
const bcrypt = require('bcryptjs')


const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes')


// Middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    cookieSession({ name: "session", keys: ["anna"], maxAge: 24 * 60 * 60 * 100 })
  );

app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(cookieParser("secretcode")); 
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
      // React app
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
app.use('/user', userRoutes)


app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
})