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



{/* <button onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1} className="goTo">
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="M33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375L13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062L32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938L17.828125 24L35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" />
</svg> */}
// </button>
{/* <span>{page}</span> */}
{/* <button onClick={() => setPage(page => Math.min(page + 1, totalPages))} disabled={page === totalPages} className="goTo"> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" />
</svg> */}
// </button> */}