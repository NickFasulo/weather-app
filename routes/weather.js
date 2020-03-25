const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/hourly?postal_code=${req.user.zip}&key=${process.env.SECRET_KEY}&units=I`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        let items = {
          lat: data.lat,
          lon: data.lon,
          icon: data.data[0].weather.icon,
          city: data.city_name,
          state: data.state_code,
          time: data.data[0].timestamp_local,
          temp: Math.round(data.data[0].temp),
          appTemp: Math.round(data.data[0].app_temp)
        };
        return res.render('weather', { items });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    return res.send('Unauthorized');
  }
});

module.exports = router;
