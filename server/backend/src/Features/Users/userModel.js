const mongoose = require("mongoose");


//creating schema for signup
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique:true},
    name: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    country: { type: String, required: true, default: "India" },
    currency:{type:String, required:true,default:"INR"}
})

// feedback: fw18_0044 - Model name should always be with Pascal case ex: User

const User = mongoose.model("user", userSchema);
module.exports = User;
