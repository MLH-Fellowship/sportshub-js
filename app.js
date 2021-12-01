const express = require("express");
const activityRouter = require("./router/activity");
const Sqlite = require("sqlite3");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const db = new Sqlite.Database("database/activity.db");
db.run("CREATE TABLE IF NOT EXISTS activity(id TEXT, name TEXT)");

app.use(bodyParser.json());
app.use("/activity", activityRouter);
app.listen(port);
