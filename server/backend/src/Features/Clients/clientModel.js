const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    email: { type: String, required: true},
    name: { type: String, required: true },
    id: { type: Number },
    
    
})

const Client = mongoose.model("client", clientSchema);
module.exports = Client;