const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  picture: { type: String, default: '' },
  location: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
