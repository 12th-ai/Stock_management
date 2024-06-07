const bcrypt = require('bcrypt');
const db = require('../Config/db');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');



const createUser = async (req) => {
    // Extract password and user data from request body
    const { name,password, username, email,dob,privilege } = req.body;

    // Check if user already exists
    const [existingUser] = await db.query('SELECT * FROM users WHERE user_email = ? OR user_name = ?', [email, username]);
    
    if (existingUser.length > 0) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Use a default emoji if no image file is provided
    const profileImage = req.file ? req.file.filename : '😊'; // Default emoji

    // Construct values array with hashed password
  
    const values = [
                name,
                 username,
                email,
                hashedPassword,
                dob,
               privilege,
               profileImage
             ];
    // Insert user data into the database
    const [rows] = await db.query('INSERT INTO users (name,user_name,user_email,user_password,dob,privillage,user_profile) VALUES (?) ', [values]);

  
    return rows;
};

const login = async (username, password) => {
  const [users] = await db.query('SELECT * FROM users WHERE user_name = ?', [username]);

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const user = users[0];
  const isPasswordValid = await bcrypt.compare(password, user.user_password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  // res.cookie('token', token, { httpOnly: true });

  return token;
};


const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE user_id = ?';
  try {
    const [rows, fields] = await db.query(query, [id]);
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};


 const logout = (req, res) => {
  res.clearCookie('token'); // Clear the authentication token cookie
  res.status(200).json({ message: 'Logged out successfully' });
};

const getUserCount = async () => {
  const query = 'SELECT COUNT(*) AS user_id FROM users';
  try {
      const [rows] = await db.query(query);
      return rows[0].user_id;
  } catch (err) {
      throw new Error('Database query failed: ' + err.message);
  }
};


module.exports = {
    createUser,
  login,
  getUserById,
  logout,
  getUserCount

};






