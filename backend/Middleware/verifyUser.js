// // verifyUser.js

const getUser = require("../Services/Auth.Service");

// const jwt = require('jsonwebtoken');

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ Error: "you are not authenticated" });
//   } else {
//     jwt.verify(token, "your_jwt_secret_key", (err, decoded) => {
//       if (err) {
//         return res.json({ Error: "token is not okay" });
//       } else {
//         req.name = decoded.name;
//         next();
//       }
//     });
//   }
// };

// module.exports = verifyUser;

const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.id; // Assuming id in the token is the username
    const user = await getUser(username);
    req.user = user; // Store user object in request for future use
    next();
  } catch (error) {
    return res.json({ Error: "Invalid token" });
  }
};


module.exports = verifyUser;
