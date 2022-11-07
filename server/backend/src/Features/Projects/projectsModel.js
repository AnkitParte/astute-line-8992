const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    clientId: { type:mongoose.Schema.Types.ObjectId, ref:"client", required:true},
    projectName: { type: String, required: true},
    currency: { type: Number, required:true, min:40},
    status:{type:Boolean,default:false},
    ratePerHour:{type:Number,required:true}
    
})
// feedback: fw18_0782 and fw18_0044 - Model name should be in Pascal case
const Project = mongoose.model("project", projectSchema);
module.exports = Project;
