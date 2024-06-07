const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const authControllers = require('../Controllers/authController');
const verifyUser = require('../Middleware/verifyUser');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Define how the file should be named
    }
});

const upload = multer({ storage: storage });

router.post('/api/auth/', upload.single("image"), authControllers.CreateAcount);
router.post('/api/auth/login/', authControllers.login);
router.get('/api/auth/user/', verifyUser, authControllers.getUserInfo);
router.post('/api/auth/logout/', authControllers.logout)

router.get('/api/auth/users/count', authControllers.getUserCount);


module.exports = router;
