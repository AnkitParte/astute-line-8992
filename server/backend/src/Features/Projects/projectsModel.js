const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    clientId: { type:mongoose.Schema.Types.ObjectId, ref:"client", required:true},
    projectName: { type: String, required: true},
    currency: { type: Number, required:true, min:40},
    status:{type:Boolean,default:false}
    
})

const Project = mongoose.model("project", projectSchema);
module.exports = Project;