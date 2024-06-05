// server.js

require('dotenv').config();  // Load environment variables
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./Config/db');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const Authroutes = require('./Routers/authRouter');
const { verify } = require('crypto');
// const verifyToken = require('./Middleware/authenticateToken');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/', Authroutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});

console.log('JWT Secret:', process.env.JWT_SECRET); // Add this line to check if the JWT_SECRET is loaded correctly




// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ Error: "You are not authenticated" });
//   } else {
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.json({ Error: "Token is not valid" });
//       } else {
//         req.id = decoded.id;
//         console.log(req.id);
//         next();
//       }
//     });
//   }
// };


// // Route to get authenticated user information
// app.get('/api/auth/user', verifyUser, async (req, res) => {
//   const query = 'SELECT * FROM users WHERE user_id = ?';

//   try {
//     const [rows, fields] = await db.query(query, [req.id]);

//     if (rows.length === 0) {
//       return res.status(404).json({ Error: "User not found" });
//     }

//     // Log the results to debug
//     console.log(rows);

//     return res.json({
//       Status: "Success",
//       name: rows[0].user_name,
//       email: rows[0].user_email,
//       profile:rows[0].user_profile
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ Error: "Internal server error" });
//   }
// });

// // app.use('/uploads', express.static(path.join(__dirname, 'backend/uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});

