require("dotenv").config();
require("./db/connection");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const bcrypt = require('bcryptjs')
const User = require("./models/User");

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (req, accessToken, refreshToken, profile, done) {
      User.findOne({ username: profile.email }).then((foundUser) => {
        if (foundUser) done(null, { ...profile, ...foundUser });
        else {
          bcrypt.hash(accessToken, 10, (err, hash) => {
            User.create({ username: profile.email, password: hash }).then(
              (createdUser) => {
                done(null, { ...profile, ...createdUser });
              }
            );
          });
        }
      });
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ username: profile.email }).then((foundUser) => {
        if (foundUser) done(null, { ...profile, ...foundUser });
        else {
          bcrypt.hash(accessToken, 10, (err, hash) => {
            User.create({ username: profile.email, password: hash }).then(
              (createdUser) => {
                done(null, { ...profile, ...createdUser });
              }
            );
          });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
