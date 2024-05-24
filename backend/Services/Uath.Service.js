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

const Updateprofile = async (req) => {
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

    const id = req.params.id;
    // Insert user data into the database
    const [rows] = await db.query('UPDATE USERS SET name = ? , user_name = ? , user_email = ?, user_password = ?, dob = ?, user_privillage= ? , user_profile = ?', [...values,id]);

    return rows;
};


const GetUserById = async(req)=>{

    const id = req.params.id;

        const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?');

      
}

module.exports = {
    createUser,
    Updateprofile
    
};
