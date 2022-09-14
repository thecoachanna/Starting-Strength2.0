const passport = require("passport");
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const userLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
}

const userRegister = (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
}
  
const userCreated = (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  }
  
module.exports = {
    userLogin,
    userRegister,
    userCreated
}