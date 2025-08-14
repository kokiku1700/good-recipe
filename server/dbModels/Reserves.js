const mongoose = require("mongoose");

const reserveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    tel: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

    ampm: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },
    adult: {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Reserve', reserveSchema);