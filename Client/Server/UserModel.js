const mongoose = require("mongoose");
const validate = require("validate")

const UserSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, "Please tell us your name"]
    }, 

    author: {
        type: String,
        required: true
    }

    // email: {
    //     type: String,
    //     required: [true, "Please provide an email"],
    //     unique: true,
    //     lowercase: true,
    //     validate: [validator.isEmail, "Please provide a valid email"]
    // },

    // password: {
    //     type: String,
    //     required: [true, "Please provide a password"],
    //     minlength: 8
    // }
});

const User = mongoose.model("User", UserSchema);

const test = User.find()
console.log(test)
module.exports = User
