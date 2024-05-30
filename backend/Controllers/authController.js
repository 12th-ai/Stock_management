const authServices = require('../Services/Auth.Service');

const CreateAcount = async (req, res, next) => {
    try {
        const userId = await authServices.createUser(req);
        res.json({ message: 'User created successfully', userId });
    } catch (error) {
        if (error.message === 'User already exists') {
            return res.status(409).json({ message: error.message });
        }
        next(error);
        console.log(error);
    }
};

const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const token = await authServices.login(username, password);
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const getUserInfo = (req, res) => {
    const username = req.name; // Provided by the middleware
    const user = authServices.getUser(username);
    return res.json({ Status: "Success", name: user.name });
  };

module.exports = {
    CreateAcount,
    login,
    getUserInfo
};
