function deleteTask(tasks, taskId) {
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      reject(new Error("No hay tareas por eliminar."));
      return;
    }

    // Se encuentra el indice de la tarea con el ID correspondiente
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));

    // Funcion para verificar si la tarea no se encontro
    if (taskIndex === -1) {
      reject(new Error("La tarea especificada no existe."));
      return;
    }

    tasks.splice(taskIndex, 1); //Se elimina la tarea seleccionada del array de tareas
    console.log("Tarea eliminada correctamente.");
    resolve();
  });
}

module.exports = {
  deleteTask,
};