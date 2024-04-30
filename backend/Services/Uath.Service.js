// services/userService.js
const db = require('../Config/db');

async function createUser(name, user_name, user_email, user_password, dob, user_privilege, profileImage) {
    const query = `
        INSERT INTO users (name, user_name, user_email, user_password, dob, user_privilege, user_profile)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, user_name, user_email, user_password, dob, user_privilege, profileImage];
    try {
        const [result] = await db.query(query, values);
        return result.insertId; // Return the ID of the newly registered user
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

async function getUserByEmailAndPassword(email, password) {
    const query = `
        SELECT * FROM users WHERE user_email = ? AND user_password = ?
    `;
    try {
        const [result] = await db.query(query, [email, password]);
        return result[0];
    } catch (error) {
        console.error('Error fetching user by email and password:', error);
        throw error;
    }
}


module.exports = { createUser, getUserByEmailAndPassword };
