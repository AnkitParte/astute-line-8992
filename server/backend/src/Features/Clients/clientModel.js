const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    email: { type: String, required: true},
    name: { type: String, required: true },
    contactName:{type:String,required:false},
    phoneNumber:{type:String,required:false},
    website:{type:String,required:false},
    companyAddress:{type:String,required:false},
    
    
})

const Client = mongoose.model("client", clientSchema);
module.exports = Client;
