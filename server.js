const express = require('express');

// setup express app
const app = express();

// port
const port = process.env.port || 8000;

// initialize routes
app.use('/api', require('./routes/hotels'));
app.use('/api', require('./routes/users'));

//listen for requests
app.listen(port, () => {
    console.log(`Now listening for requests on port: ` + port)
});