const express = require("express");
const router = express.Router();
const { tasks } = require("../../modules/addTask");

// ruta para visualizar todas las tareas o filtrar por completas/incompletas
router.get("/tasks/:status?", (req, res) => {
  const { status } = req.params;
  if (status === "completed") {
    const completedTasks = tasks.filter((task) => task.completed);
    res.status(200).json(completedTasks);
  } else if (status === "incomplete") {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    res.status(200).json(incompleteTasks);
  } else if (status !== undefined) {
    // si se proporciona un parametro invalido, responde con un error
    res.status(400).json({ error: "Parámetro 'status' inválido." });
  } else {
    // si no se proporciona ningun parametro, muestra todas las tareas
    res.status(200).json(tasks);
  }
});

module.exports = router;