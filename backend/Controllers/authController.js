// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserService = require('../Services/Uath.Service');

async function register(req, res) {
    const { name, user_name, email, assword, dob, privilege } = req.body;
    const profileImage = req.file.filename;

    try {
        const hashedPassword = await bcrypt.hash(user_password, 10);
        const user = await UserService.createUser(name, user_name, email, hashedPassword, dob, privilege, profileImage);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// const register = async (req, res, next) => {
//     try {
//         // Check if the requested name already exists
    
//         // If the requested name doesn't exist, proceed with creating the employee
//         const User = await authservices.(req);
//         res.json({message:'User created successfully'});
//     } catch (error) {
//         next(error); // Pass the error to the error handling middleware
//         console.log(error)
//     }
// };


async function login(req, res) {
    const { user_name, user_password } = req.body;
    try {
        // Retrieve the user record by username
        const user = await UserService.getUserByUsername(user_name);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // If the password is valid, generate a JWT token and send it back to the client
        const token = jwt.sign({ userId: user.id, username: user.user_name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ userId: user.id, token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { register, login };
