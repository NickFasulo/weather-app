const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const NodeGeocoder = require('node-geocoder');
const User = require('../models/User');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.render('weather');
  } else {
    return res.send('Unauthorized');
  }
});

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       let lon = position.coords.longitude;
//       let lat = position.coords.latitude;
//       fetch(
//         `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/${lat},${lon}`
//       )
//         .then(data => data.json())
//         .then(data => console.log(data));
//     });
//   }

// const geocoder = NodeGeocoder({
//   provider: 'google',
//   httpAdapter: 'https',
//   apiKey: 'AIzaSyAm1sRVoUp6vLGR_jKeC-syToSND9_hIjk',
//   formatter: null
// });

// geocoder
//   .geocode('29 champs elysée paris')
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

module.exports = router;
