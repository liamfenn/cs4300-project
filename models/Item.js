const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    citystate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    highestBid: {
        type: Number,
        required: true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);