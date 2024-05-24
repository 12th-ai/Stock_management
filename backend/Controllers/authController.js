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

const UpdateProfile = async (req, res, next) => {

    try {
           
        const User = await authservices.Updateprofile(req);

        res.json({message:'Profile updated successfully'});

    } catch (error) {

        next(error); // Pass the error to the error handling middleware
        
        console.log(error)
    }
};


const GetUserById = async (req, res, next) => {

    try {
           
        const User = await authservices.GetUserById(req);

        res.json({message:'Profile updated successfully'});

    } catch (error) {

        next(error); // Pass the error to the error handling middleware
        
        console.log(error)
    }
};



module.exports ={
   CreateAcount,
   UpdateProfile,
   GetUserById
}