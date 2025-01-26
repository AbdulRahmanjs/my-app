import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import connection from './config/dbConnect.js'
import userRoutes  from'./routes/userRoutes'
import loanRoutes  from'./routes/loanRoutes'

connection()


// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());



// Base route
app.get('/', (req, res) => {
  res.send('Saylani Microfinance App API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
