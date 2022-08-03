const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
