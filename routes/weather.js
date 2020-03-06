const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// let url = `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/${lat},${lon}`;

router.get('/', (req, res) => {
  fetch(`https://api.darksky.net/forecast/${process.env.SECRET_KEY}/42.3601,-71.0589?exclude=minutely,flags`)
    .then(result => result.json())
    .then(data => {
      res.json(data)
    })
    .catch(err => console.log('error in api call', err));
});

module.exports = router;
