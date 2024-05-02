const authservices = require('../Services/Uath.Service');

const CreateAcount = async (req, res, next) => {

    try {
           
        const User = await authservices.createUser(req);

        res.json({message:'User created successfully'});

    } catch (error) {

        next(error); // Pass the error to the error handling middleware
        
        console.log(error)
    }
};



const logins = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authservices.login(username, password);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
   CreateAcount,
   logins

};