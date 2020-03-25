const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
// const NodeGeocoder = require('node-geocoder');
require('dotenv').config();
// const geocoder = NodeGeocoder({
//   provider: 'google',
//   httpAdapter: 'https',
//   apiKey: process.env.GOOGLE_KEY,
//   formatter: null
// });

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    // geocoder
    //   .geocode(req.user.zip)
    //   .then(data => {
    //     let lat = data[0].latitude;
    //     let lon = data[0].longitude;

        fetch(
          // `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/${lat},${lon}`
          `https://api.weatherbit.io/v2.0/current?postal_code=${req.user.zip}&key=${process.env.SECRET_KEY2}`
        )
          .then(data => data.json())
          .then(data => {
            console.log(data);
            let detail = {
              lat: data.latitude,
              lon: data.longitude,
              summary: data.currently.summary,
              icon: data.currently.icon,
              temp: data.currently.temperature,
              feelsLike: data.currently.apparentTemperature
            };
            res.render('weather', { detail });
          })
      // })
      .catch(err => {
        console.log(err);
      });
  } else {
    return res.send('Unauthorized');
  }
});

module.exports = router;
