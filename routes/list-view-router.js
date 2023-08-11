const express = require("express");
const router = express.Router();
const { tasks } = require("../../modules/addTask");

router.get("/completed-tasks", (_req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.status(200).json(completedTasks);
});

router.get("/incomplete-tasks", (_req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.status(200).json(incompleteTasks);
});

module.exports = router;