const express = require("express");
const Client = require("../Clients/clientModel");
const Project = require("./projectsModel");

const app = express.Router();
let clientId;
const authMiddleWare = async (req, res, next) => {
    // feedback: fw18_0044 - Follow standards, you should you Authorization as header
    let token = req.headers.token;
    console.log(token);
    
    try {
        const [id, email] = token.split(":");
        console.log(id);
        let checkUser = await Client.findById(id);
        // console.log(checkUser, email,id,name);
        if (checkUser.email===email){
            clientId = id;
            console.log(id);

            return next();
        }
        return res.status(401).send("can not perform this operation");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}

app.use(authMiddleWare);

//get the clients
app.get("/", async (req, res) => {
       
    try {
        
        const projects = await Project.find({ clientId: clientId });
        if (projects) {
            
            return res.send(projects);
        }
        return res.status(404).send("Not Found");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    
})

app.post("/", async(req, res)=>{
    const { projectName, currency } = req.body;
    
    try {
        
            let newProject = await Project.create({ currency, clientId,projectName });
            console.log(newProject);
        return res.status(201).send({
                token:`${newProject._id}:${newProject.projectName}`
            }); 
        

        
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    try {
       
            let updated = await Project.findByIdAndUpdate(id,req.body,{new:true})
            return res.send(updated);
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    
    try {
        
        let data = await Project.findByIdAndRemove(id,{new:true});
        console.log(data);
        return res.send(data);
        
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})





module.exports = app;


