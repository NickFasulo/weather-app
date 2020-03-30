const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
