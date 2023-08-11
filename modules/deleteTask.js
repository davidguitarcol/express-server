function deleteTask(tasks, taskId) {
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      reject(new Error("No hay ninguna tarea para eliminar."));
      return;
    }

    // se encuentra el indice de la tarea con el ID correspondiente
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));

    // verifica si la tarea no se encontro
    if (taskIndex === -1) {
      reject(new Error("La tarea no existe."));
      return;
    }

    tasks.splice(taskIndex, 1); // Eliminar la tarea seleccionada del array de tareas
    console.log("Tarea eliminada correctamente.");
    resolve();
  });
}

module.exports = {
  deleteTask,
};