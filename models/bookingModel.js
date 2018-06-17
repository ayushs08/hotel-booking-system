const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = require('./roomModel');
const hotel = require('./hotelModel');
const user = require('./userModel');

// create booking Schema and model
const BookingSchema = new Schema({
    checkIn: {
        type: Date,
        required: [true, 'Check in date is required']
    },
    checkOut: {
        type: Date,
        required: [true, 'Check out date is required']
    },
    amount: {
        type: Number,
        required: [true, 'Total amount is required']
    },
    guests: {
        type: Number,
        required: [true, 'Number of guests is required']
    },
    nights: {
        type: Number,
        required: [true, 'Number of nights is required']
    },
    adults: {
        type: Number
    },
    children: {
        type: Number,
        default: 0
    },
    // createdBy: [{
    //     type: mongoose.Schema.Types._id,
    //     ref: 'User'
    // }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;