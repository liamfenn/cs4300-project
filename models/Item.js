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
        type: String,
        required: true
    },
    guests: {
        type: String,
        required: true
    },
    highestBid: {
        type: String,
        required: true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);