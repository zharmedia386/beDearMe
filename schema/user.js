const mongoose = require('mongoose')

const User = mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    }
 },{versionKey: false});

 module.exports = mongoose.model("User", User)