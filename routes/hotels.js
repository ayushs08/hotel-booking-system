const express = require('express');
const router = express.Router();

const Hotel = require('../models/hotelModel');

// get a list of hotels from db
router.get('/hotels', (req, res, next) => {
    // Hotel.find({name: req.query.hotelName})
    // .then( hotels => res.send(hotels));
    Hotel.find({name: req.body.name})
    .populate('rooms')
    .exec( (err, hotels) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(hotels) }
    });
});

// add a new hotel to db
router.post('/hotels', (req, res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.send(hotel);
    }).catch(next);
});

//update a hotel in db
router.put('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.send(hotel);
        });
    });
});

//delete a hotel form db
router.delete('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndRemove({_id: req.params.id})
    .then( hotel => {
        res.send(hotel);
    });
});

module.exports = router;