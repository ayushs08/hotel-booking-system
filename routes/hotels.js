const express = require('express');
const router = express.Router();

// get a list of hotels from db
router.get('/hotels', (req, res) => {
    res.send({
        type : 'GET'
    });
});


// add a new hotel to db
router.post('/hotels', (req, res) => {
    res.send({
        type : 'POST'
    });
});

//update a hotel in db
router.put('/hotels/:id', (req, res) => {
    res.send({
        type : 'PUT'
    });
});

//delete a hotel form db
router.delete('/hotels/:id', (req, res) => {
    res.send({
        type : 'DELETE'
    });
});

module.exports = router;