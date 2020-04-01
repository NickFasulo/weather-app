const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

router.get('/', favoriteController.getFavorites);

router.post('/', favoriteController.saveFavorite);

router.delete('/', favoriteController.deleteFavorite);

module.exports = router;
