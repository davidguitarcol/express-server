const readlineSync = require("readline-sync");

function showTasks(tasks, prompt) {
  // Funcion para verificar si no hay tareas disponibles
  if (tasks.length === 0) {
    console.log("No hay tareas disponibles.");
    return -1;
  }

  console.log(prompt);
  for (let i = 0; i < tasks.length; i++) {
    // se muestra el numero de la tarea, la descripcion y su estado
    console.log(
      `${i + 1}. ${tasks[i].description}: ${
        tasks[i].completed ? "completed" : "incompleted"
      }`
    );
  }
  console.log("0. Cancelar");

  const input = readlineSync.question("Ingrese el número de la tarea: "); // solicita al usuario ingresar el numero de la tarea
  const taskIndex = parseInt(input); // convierte el numero ingresado en un índice válido

  // valida la seleccion del usuario
  if (isNaN(taskIndex) || taskIndex < 0 || taskIndex > tasks.length) {
    console.log("Selección inválida.");
    return -1;
  }

  return taskIndex - 1; // devuelve el índice de la tarea seleccionada
}

module.exports = {
  showTasks,
};