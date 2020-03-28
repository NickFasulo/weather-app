const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
  favorites: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Favorites', FavoritesSchema);
