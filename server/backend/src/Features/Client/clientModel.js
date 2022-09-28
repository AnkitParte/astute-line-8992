const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    status: { type: Boolean},
    paid: { type: Number }
})

const client = mongoose.model("client",clientSchema);
module.exports = client;