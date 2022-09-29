const express = require("express");
const User = require("./userModel");

const app = express.Router();

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {

        let checkUser = await User.findOne({ email,password});
        console.log(checkUser);
        if (!checkUser) {
            return  res.status(401).send("Authentication failed, need to sign-up");
        }
        
       return  res.status(200).send({
            token:`${checkUser.id}:${checkUser.email}:${checkUser.name}`
        })
       

    }
    catch (e) {
        res.status(500).send(e.message);
    }

})

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let checkUser = await User.findOne({ email });
        console.log(checkUser);
        if (checkUser) {
            return res.status(401).send("Registration fails as user already registered");
        }
        let newUser = await User.create({
            name,email,password
        })
        console.log(newUser);
        res.send({
            token:`${newUser.id}:${newUser.email}:${newUser.name}`
        })
        
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})


module.exports = app;


