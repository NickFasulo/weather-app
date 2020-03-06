const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../lib/passport');
const User = require('../models/User');
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', (req, res) => {
  User.find({})
    .then(users => {
      return res.status(200).json({ message: 'Success', users });
    })
    .catch(err => res.status(500).json({ message: 'Server error', err }));
});

router.get('/register', (req, res) => {
  res.render('register');
});

// register with passport
router.post('/register', userController.register);

router.get('/login', (req, res) => {
  res.render('login');
});

// login with passport
router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/weather',
    failureRedirect: '/users/fail',
    failureFlash: true
  })
);

router.get('/fail', (req, res) => {
  return res.render('fail');
});

module.exports = router;
