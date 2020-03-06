const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return done(err, null);
        if (!user) {
          return done(
            null,
            false,
            req.flash('errors', 'No user has been found')
          );
        }
        bcrypt
          .compare(password, user.password)
          .then(result => {
            console.log(password);
            console.log(user.password);
            if (!result) {
              return done(
                null,
                false,
                req.flash('errors', 'Check email or password')
              );
            } else {
              return done(null, user);
            }
          })
          .catch(err => {
            throw err;
          });
      });
    }
  )
);
