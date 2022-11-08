const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4000;
const bodyParser = require('body-parser');
require ("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => app.listen(port, () => {
        console.log("Connected to MongoDB");
        console.log(`Server is running on port ${port}`);
    }))
    .catch(err => console.log(err));
