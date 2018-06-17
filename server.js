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
app.use(express.Router().get('/', (req, res) => {res.send('<h1>Hotel Booking System</h1>');}));
app.use(express.Router().get('/api', (req, res) => {res.send('<h1>API System</h1>');}));
app.use('/api', require('./routes/hotels'));
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/bookings'));

// error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

//listen for requests
app.listen(port, () => {
    console.log(`Now listening for requests on port: ` + port)
});