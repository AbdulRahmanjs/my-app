const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  cnic: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const users = mongoose.model('User', UserSchema);
