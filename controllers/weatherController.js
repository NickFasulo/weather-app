const fetch = require('node-fetch');
require('dotenv').config();

module.exports = {
  getWeather: (req, res) => {
    if (req.isAuthenticated()) {
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/hourly?postal_code=${req.user.zip}&key=${process.env.SECRET_KEY}&units=I`
      )
        .then(data => data.json())
        .then(data => {
          let user = req.user
          let items = {
            lat: data.lat,
            lon: data.lon,
            city: data.city_name,
            state: data.state_code,
            date: data.data[0].timestamp_local.slice(0, -9),
            icon: data.data[0].weather.icon,
            rain: data.data[0].pop,
            wind: Math.round(data.data[0].wind_spd),
            temp: Math.round(data.data[0].temp),
            appTemp: Math.round(data.data[0].app_temp)
          };
          return res.render('weather', { items, user });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return res.send('Unauthorized');
    }
  },
  searchWeather: (req, res) => {
    if (req.isAuthenticated()) {
      console.log(req.body.search);
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/hourly?postal_code=${req.body.search}&key=${process.env.SECRET_KEY}&units=I`
      )
        .then(data => data.json())
        .then(data => {
          let items = {
            lat: data.lat,
            lon: data.lon,
            city: data.city_name,
            state: data.state_code,
            date: data.data[0].timestamp_local.slice(0, -9),
            icon: data.data[0].weather.icon,
            rain: data.data[0].pop,
            wind: Math.round(data.data[0].wind_spd),
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
  }
};
