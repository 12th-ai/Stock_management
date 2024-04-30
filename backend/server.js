// server.js
const express = require('express');
const app = express();
const authRouter = require('./Routers/authRouter');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
