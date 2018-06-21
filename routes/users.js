const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// get a list of users from db
router.get('/users', (req, res, next) => {
    User.find({})
    .then( user => res.send(user) );
});


// add a new hotel to db
router.post('/users', (req, res, next) => {
    User.create(req.body)
    .then( user => {
        res.send(user);
    }).catch(next);
});

//update a hotel in db
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        User.findOne({_id: req.params.id})
        .then( user => {
            res.send(user);
        });
    });
});

//delete a hotel form db
router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id})
    .then( user => {
        res.send(user);
    });
});

module.exports = router;