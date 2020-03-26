const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/', weatherController.getWeather);

router.post('/search', weatherController.searchWeather);

module.exports = router;
