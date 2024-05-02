const bcrypt = require('bcrypt');
const db = require('../Config/db');
const jwt = require('jsonwebtoken');
const path = require('path');

const cors = require('cors');


const createUser = async (req) => {
    // Extract password from request body
    const { password, ...userData } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Construct values array with hashed password
    const values = [
        userData.name,
        userData.username,
        userData.email,
        hashedPassword,
        userData.dob,
        userData.privilege,
        req.file.filename
    ];

    // Insert user data into the database
    const [rows] = await db.query('INSERT INTO users (name,user_name,user_email,user_password,dob,privillage,user_profile) VALUES (?) ', [values]);

    return rows;
};

const login = async (username, password, res) => {
  try {
      const [rows] = await db.query('SELECT * FROM users WHERE user_name = ?', [username]);
      if (!rows.length) {
          throw new Error('Invalid username ');
      }
      
      const hashedPassword = rows[0].password;
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (!passwordMatch) {
          throw new Error('Invalid password');
      }
      
      const token = jwt.sign({ userId: rows[0].id }, 'secret_key', { expiresIn: '1h' });
      
      // Set token in a cookie
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration
      
      return token;
  } catch (error) {
      throw error;
  }
};



module.exports = {
    createUser,
    login
};
