const express = require("express");
const router = express.Router();
const { tasks, addTask } = require("../../modules/addTask");
const { deleteTask } = require("../../modules/deleteTask");

router.post("/create-task", (req, res) => {
  const { description } = req.body;
  addTask(description);
  res.status(200).json({ message: "Tarea agregada exitosamente." });
});

router.delete("/delete-task/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  deleteTask(tasks, taskId)
    .then(() => {
      res.status(200).json({ message: "Tarea eliminada exitosamente." });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

router.put("/update-task/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const { description, completed } = req.body;

  // busca la tarea por su ID
  const task = tasks.find((task) => task.id === parseInt(taskId));

  // verifica si la tarea existe
  if (!task) {
    res.status(404).json({ error: "La tarea no existe." });
    return;
  }

  // actualiza la descripcion
  if (description) {
    task.description = description;
  }

  // actualiza el estado de completado
  if (completed !== undefined) {
    task.completed = completed;
  }

  res.status(200).json({ message: "Tarea actualizada correctamente.", task });
});

module.exports = router;