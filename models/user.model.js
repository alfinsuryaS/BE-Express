
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //validation
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true
});

//Create the model
const User = mongoose.model('User', userSchema)
module.exports = User