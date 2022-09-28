const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, 
        ref:"client",
        required: true },
    name:{type: String},
    status:{type:Boolean}
})

const task = mongoose.model("task",taskSchema);
module.exports = task;