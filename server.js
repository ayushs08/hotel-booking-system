const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/hms');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// port
const port = process.env.port || 8000;

// initialize routes
app.use('/api', require('./routes/hotels'));
app.use('/api', require('./routes/users'));

//listen for requests
app.listen(port, () => {
    console.log(`Now listening for requests on port: ` + port)
});