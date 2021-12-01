const express = require("express");
const activityRouter = require("./router/activity");
const db = require("./db");
const bodyParser = require("body-parser");
const app = express();

db.run("CREATE TABLE IF NOT EXISTS activity(id TEXT, name TEXT)");

app.use(bodyParser.json());
app.use("/activity", activityRouter);

module.exports = app;
