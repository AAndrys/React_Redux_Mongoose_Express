const mongoose = require('mongoose');


//SCHEMA
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('User', UserSchema);