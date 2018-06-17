const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = require('./roomModel');

// create hotel Schema and model
const HotelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required']
    },
    rooms: [{
        type: mongoose.Schema.Types.number,
        ref: 'Room'
    }],
    stars: {
        type: number
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;