const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const User = require('../models/User');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    fetch(
      `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/37.8267,-122.4233`
    )
      .then(result => {
        return result.json();
      })
      .then(data => {
        return res.send(data);
      })
      .catch(err => res.send(err));
  } else {
    res.send('Unauthorized');
  }
});

module.exports = router;
