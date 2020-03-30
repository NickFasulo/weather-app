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

router.post('/register', userController.register);

router.get('/login', (req, res) => {
  res.render('login');
});

router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/api/weather',
    failureRedirect: '/api/users/fail',
    failureFlash: true
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});

router.get('/fail', (req, res) => {
  return res.render('fail');
});

router.get('/unauth', (req, res) => {
  return res.render('unauth');
});

router.get('/favorites', (req, res) => {
  if (req.isAuthenticated()) {
    return res.render('favorites');
  } else {
    return res.redirect('/api/users/unauth');
  }
});

router.post('/favorites', (req, res) => {
  
})

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    return res.render('profile');
  } else {
    return res.redirect('/api/users/unauth');
  }
});

module.exports = router;
