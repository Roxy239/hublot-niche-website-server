const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "client"],
        default: "client"
    }
});

module.exports = userSchema;