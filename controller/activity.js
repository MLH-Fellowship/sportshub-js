const Sqlite = require("sqlite3");
const db = new Sqlite.Database("database/activity.db");

exports.getActivities = (req, res) => {
  db.serialize(() => {
    db.run("SELECT * FROM activity", function (err, allRows) {
      if (err) {
        res.send("Something went unexpected!");
        return console.log("Something went unexpected!", err.message);
      }
      res.send("RECORDS");
      console.log(allRows);
    });
  });
};

exports.postActivity = (req, res) => {
  console.log(req.body);
  db.serialize(() => {
    db.run("INSERT INTO activity(id,name) VALUES(?,?)", [req.body.id, req.body.name], (err) => {
      if (err) {
        res.send("Something went unexpected!");
        return console.log("Something went unexpected!");
      }
      res.send("Record Added!");
    });
  });
};

exports.deleteActivity = (req, res) => {
  res.send("DELETE Activity");
};
