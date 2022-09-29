const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    email: { type: String, required: true},
    name: { type: String, required: true },
    id: { type: Number },
    contactName:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    website:{type:String,required:true},
    companyAddress:{type:String,required:true},
    
    
})

const Client = mongoose.model("client", clientSchema);
module.exports = Client;