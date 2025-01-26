import express  from('express');
const router = express.Router();
import loan  from('../models/Loan');

// Submit Loan Request
router.post('/submit', async (req, res) => {
  const { userId, category, subcategory, amount, loanPeriod, guarantors } = req.body;

  try {
    const loan = new Loan({ userId, category, subcategory, amount, loanPeriod, guarantors });
    await loan.save();
    res.status(201).json({ message: 'Loan request submitted successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Loan Details
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const loans = await Loan.find({ userId });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
