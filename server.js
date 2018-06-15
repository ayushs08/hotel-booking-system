const express = require('express');

// setup express app
const app = express();

// port
const port = process.env.port || 8000;

//listen for requests
app.listen(port, () => {
    console.log(`Now listening for requests on port: ` + port)
});