const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  address: { type: String, required: true, default: '' },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
