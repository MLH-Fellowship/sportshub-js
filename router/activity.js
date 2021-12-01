const express = require("express");
const { getActivities, postActivity, deleteActivity } = require("../controller/activity");
const router = express.Router();

router.get("/", getActivities);

router.post("/", postActivity);

router.delete("/:id", deleteActivity);

module.exports = router;
