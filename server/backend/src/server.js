const express = require("express");
const userRouter = require("./Features/Users/userRouter");
const connect = require("./Config/config");

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.listen(5000, async () => {
    await connect();
    console.log("User heat the server!!");
})