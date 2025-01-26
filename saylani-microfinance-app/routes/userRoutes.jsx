import express  from('express');
const router = express.Router();
import User  from('../models/User');

// Register User
router.post('/register', async (req, res) => {
  const { cnic, name, email, password } = req.body;

  try {
    const user = new User({ cnic, name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
