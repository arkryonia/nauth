const mongoose = require('mongoose')

// Schema
const  userSchema = new mongoose.Schema({
    email   : {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Model
const User = mongoose.model('User', userSchema)

// Exports
module.exports = User