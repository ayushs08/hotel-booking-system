const express = require('express');
const router = express.Router();

const Room = require('../models/roomModel');
const Hotel = require('../models/hotelModel');

// get a list of rooms from db
router.get('/rooms', (req, res, next) => {
    Room.find({hotel: req.body.hotel})
    .then( rooms => res.send(room) );
});

// add a new room to db
router.post('/rooms', (req, res, next) => {
    Room.create(req.body)
    .then( room => {
        Hotel.find({name : req.body.hotel})
        .then (hotels => array.forEach(element => {
           element.rooms.push('WORKS') 
        }))
    })
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