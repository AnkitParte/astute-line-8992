const mongoose = require("mongoose");
const validator = require('validator');

//creating schema for signup
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique:true},
    name: { type: String, required: true },
    password:{type:String, required:true, minlength: 6}
})

const User = mongoose.model("user", userSchema);
module.exports = User;