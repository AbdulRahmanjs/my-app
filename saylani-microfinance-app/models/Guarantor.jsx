const mongoose = require('mongoose');

const GuarantorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cnic: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Guarantor', GuarantorSchema);
