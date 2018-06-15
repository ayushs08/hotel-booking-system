const express = require('express');
const router = express.Router();

// get a list of users from db
router.get('/users', (req, res) => {
    res.send({
        type : 'GET'
    });
});


// add a new hotel to db
router.post('/users', (req, res) => {
    res.send({
        type : 'POST'
    });
});

//update a hotel in db
router.put('/users/:id', (req, res) => {
    res.send({
        type : 'PUT'
    });
});

//delete a hotel form db
router.delete('/users/:id', (req, res) => {
    res.send({
        type : 'DELETE'
    });
});

module.exports = router;