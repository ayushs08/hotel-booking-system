const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create room Schema and model
const RoomSchema = new Schema({
    number: {
        type: number,
        required: [true, 'Room number is required']
    },
    type: {
        type: String,
        required: [true, 'Please specify room type']
    },
    pricePerNight: {
        type: number,
        required: [true, 'Please specify price per night']
    },
    maxGuest: {
        type: number,
        required: [true, 'Please specify maximum number of guests allowed']
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;