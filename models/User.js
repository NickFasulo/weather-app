const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  city: { type: String, lowercase: true},
  state: {
    type: String,
    lowercase: true,
    minlength: 2,
    maxlength: 2
  },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
