// server.js

require('dotenv').config();  // Load environment variables
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./Config/db');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const Authroutes = require('./Routers/authRouter');
const { verify } = require('crypto');
// const verifyToken = require('./Middleware/authenticateToken');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/', Authroutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});

console.log('JWT Secret:', process.env.JWT_SECRET); // Add this line to check if the JWT_SECRET is loaded correctly



// Middleware to verify user

const verifyUser =  (req,res,next) =>{
  const token = req.cookies.token;
  if(!token){ 
    return res.json({Error:"you are not authenticated "}); 
  }
  else{
    jwt.verify(token,"your_jwt_secret_key",(err,decoded)=>{
      if(err) {
        return res.json({Error:"token is not okey"});
      }
      else{
        req.name= decoded.name;
        next();
      }
    })
  }

}

app.get('/api/auth/user',verifyUser,(req,res)=>{
   return res.json({Status:"Success",name:req.name})
})




app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});