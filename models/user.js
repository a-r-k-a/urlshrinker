//creating a user model/structure

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    DateOfBirth: Date,
    Age: Number
})

const User = mongoose.model('user', userSchema);

module.exports = User;