const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
