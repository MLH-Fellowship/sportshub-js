const db = require("../db");

exports.getActivities = (req, res) => {
  db.serialize(() => {
    db.each("SELECT * FROM activity", function (err, allRows) {
      if (err) {
        res.send("Something went unexpected!");
        return console.log("Something went unexpected!", err.message);
      }
      return res.send([allRows]);
    });
  });
  return res.send("No Record found!");
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
