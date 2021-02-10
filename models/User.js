const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    default: '',
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
    lowercase: true,
    default: '',
  },
  picture: {
    type: String,
    trim: true,
    default: '',
  },
  location: {
    type: String,
    trim: true,
    require: true,
    default: '',
  },
  favorite: { type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
