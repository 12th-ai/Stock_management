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

const getUserInfo = async (req, res) => {
    try {
      const rows = await authServices.getUserById(req.id);
      if (rows.length === 0) {
        return res.status(404).json({ Error: "User not found" });
      }
      console.log(rows);
      return res.json({
        Status: "Success",
        name: rows[0].user_name,
        email: rows[0].user_email,
        profile: rows[0].user_profile
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Error: "Internal server error" });
    }
  };

module.exports = {
    CreateAcount,
    login,
    getUserInfo
};
