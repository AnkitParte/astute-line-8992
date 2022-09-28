const express = require("express");
const Client = require("./clientModel");

const app = express.Router();

//to get all you clients
//there will going to be a token inside the header during the get request
//token = user.token //every user possess key name token with a value

app.get("/", async (req, res) => {
    const {userid} = req.headers;

    try {
        const data = await Client.find({ userId: userid });
        res.status(200).send({id:userid,data:data})
    }
    catch (e) {
        res.status(400).send({ message: "No Clients" })
    }
})

//to post new clients
//during the time of create a client we have to pass the token(a key with value)
//ans that token key is also being present inside the client object
app.post("/", async (req, res) => {
    const data = await Client.create(req.body);
    res.status(200).send(data);
})

//to patch a project
app.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Client.findByIdAndUpdate({ _id: id }, { status: status });
    res.status(200).send(data)
})

//to delete a project
app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await Client.findByIdAndRemove({ _id: id });
    res.status(200).send({message:"Project Delete",project:data});
})

module.exports = app;