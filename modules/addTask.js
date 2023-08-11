const tasks = [
  {
    id: 1,
    completed: false,
    description: "Tarea 1",
  },
  {
    id: 2,
    completed: true,
    description: "Tarea 2",
  },
];

function addTask(description) {
  return new Promise((resolve, reject) => {
    // Validacion de la descripcion 
    if (!description.trim()) {
      reject(new Error("La descripción no puede estar vacía."));
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      completed: false,
      description,
    };

    tasks.push(newTask);

    console.log("Tarea añadida correctamente.");

    resolve(newTask);
  });
}

module.exports = {
  addTask,
  tasks,
};