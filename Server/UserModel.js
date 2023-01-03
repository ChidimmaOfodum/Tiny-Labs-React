const mongoose = require("mongoose");
const validate = require("validate")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"]
    }, 

    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },

    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8
    }
});

const User = mongoose.model("User", UserSchema);
model.exports = User
