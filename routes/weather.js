const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// let url = `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/${lat},${lon}`;

router.get('/', (req, res) => {
  fetch(`https://api.darksky.net/forecast/${process.env.SECRET_KEY}/42.3601,-71.0589?exclude=minutely,flags`)
    .then(result => result.json())
    .then(data => {
      res.send(data)
    })
    .catch(err => res.send(err));
  // if (req.isAuthenticated()) {
  //   res.render('weather');
  // } else {
  //   res.send('Unauthorized');
  // }
});

module.exports = router;
