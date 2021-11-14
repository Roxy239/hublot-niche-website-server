const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    review: {
        type: String,
        required: true
    }
});

module.exports = reviewSchema;