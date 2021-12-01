const express = require("express");
const activityRouter = require("./router/activity");

const app = express();
const port = 3000;

app.use("/activity", activityRouter);
app.listen(port);
