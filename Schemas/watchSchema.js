const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({
    key: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    description: String,
    img: {
        type: String,
        required: true
    }
});

module.exports = watchSchema;