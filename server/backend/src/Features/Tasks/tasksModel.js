const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
    projectId: { type:mongoose.Schema.Types.ObjectId, ref:"project", required:true},
    task: { type: String, required: true},
    status:{type:Boolean,default:false}
    
})

const Tasks = mongoose.model("task", TasksSchema);
module.exports = Tasks;