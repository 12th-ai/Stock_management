// routers/authRouter.js
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const multer = require('multer');
const path = require('path');
const cors = require('cors');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Define the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Define how the file should be named
    }
  });
const upload = multer({ storage: storage });

// router.post('/api/auth/', upload.single('image'), authController.register);
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file); // Log the uploaded file object
  authController.register(req, res); // Call the register controller
});
router.post('/login', authController.login);

module.exports = router;
