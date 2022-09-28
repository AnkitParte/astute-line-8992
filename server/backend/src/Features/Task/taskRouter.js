const express = require("express");
const Task = require("./taskModel");

const app = express.Router();

app.get("/", async (req, res) => {
    const {clientid} = req.headers;

    try {
        const data = await Task.find({ clientId: clientid });
        res.status(200).send({id:clientid,data:data})
    }
    catch (e) {
        res.status(400).send({ message: "No Clients" })
    }
})

app.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Task.findByIdAndUpdate({ _id: id }, { status: status });
    res.status(200).send(data)
})

app.post("/", async (req, res) => {
    const data = await Task.create(req.body);
    res.status(200).send(data);
})

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await Task.findByIdAndRemove({ _id: id });
    res.status(200).send({message:"Project Delete",project:data});
})

module.exports = app;