// server.js

require('dotenv').config();  // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');  // Assuming multer will be used in the future

const db = require('./Config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const Authroutes = require('./Routers/authRouter');
const stockRoutes = require('./Routers/StockinRouter');

// Middleware setup
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Define routes
app.use('/', Authroutes);
app.use('/api', stockRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});

// Serve static files 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Check if JWT_SECRET is loaded correctly
console.log('JWT Secret:', process.env.JWT_SECRET);

// Start the server
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});



