const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    watch_name: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "pending"
    }

});

module.exports = orderSchema;