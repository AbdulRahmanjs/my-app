const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  amount: { type: Number, required: true },
  loanPeriod: { type: Number, required: true },
  guarantors: [
    {
      name: String,
      email: String,
      cnic: String,
      location: String,
    },
  ],
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
});

const loan = mongoose.model('Loan', LoanSchema);
