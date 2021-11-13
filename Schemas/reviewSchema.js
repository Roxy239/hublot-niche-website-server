const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    }
});

module.exports = reviewSchema;