const express = require("express");
const cors = require("cors");
const userRouter = require("./Features/Users/userRouter");
const clientRouter = require("./Features/Clients/clientRouter");
const projectRouter = require("./Features/Projects/projectsRouter");
const taskRouter = require("./Features/Tasks/tasksRouter");
const connect = require("./Config/config");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/clients", clientRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.listen(5000, async () => {
    // feedback: fw18_0044 - Db connection should be done outside this
    await connect();
    console.log("User heat the server!!");
})
