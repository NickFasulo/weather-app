const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const User = require('../models/User');

router.get('/', (req, res) => {
  // const apiUrl = `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/${lat},${lon}`;
  // const apiUrl = `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/37.8267,-122.4233`;
  // const response = await fetch(apiUrl);
  // const json = await response.json();
  // response.json(json);

  if (req.isAuthenticated()) {
    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${req.user.city},${req.user.state}&key=${process.env.SECRET_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(data => {
        return res.send(data);
      })
      .catch(err => res.send(err));
    console.log(req.user);
    // res.render('weather');
  } else {
    res.send('Unauthorized');
  }
});

module.exports = router;
