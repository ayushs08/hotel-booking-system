const express = require('express');
const router = express.Router();

const Room = require('../models/roomModel');

// get a list of rooms from db
router.get('/rooms', (req, res, next) => {
    res.send({
        type : 'GET'
    });
});

// add a new room to db
router.post('/rooms', (req, res, next) => {
    Room.create(req.body)
    .then( room => {
        res.send(room);
    }).catch(next);
});

//update a room in db
router.put('/rooms/:id', (req, res, next) => {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Room.findOne({_id: req.params.id})
        .then( room => {
            res.send(room);
        });
    });
});

//delete a room form db
router.delete('/rooms/:id', (req, res, next) => {
    Room.findByIdAndRemove({_id: req.params.id})
    .then( room => {
        res.send(room);
    });
});

module.exports = router;