const readline = require('readline-sync');

const taskList = [];

function addTask() {
  const id = taskList.length + 1;
  const description = readline.question('Descripción de la tarea: ');
  const status = 'incompleta';
  taskList.push({ id, description, status });
  console.log('Tarea añadida exitosamente.');
}

function deleteTask() {
  const id = readline.questionInt('ID de la tarea que deseas eliminar: ');
  const taskIndex = taskList.findIndex(task => task.id === id);
  if (taskIndex >= 0) {
    taskList.splice(taskIndex, 1);
    console.log('Tarea eliminada exitosamente.');
  } else {
    console.log('No se encontró la tarea con ese ID.');
  }
}

function completeTask() {
  const id = readline.questionInt('ID de la tarea que deseas marcar como completada: ');
  const task = taskList.find(task => task.id === id);
  if (task) {
    task.status = 'completada';
    console.log('Tarea marcada como completada exitosamente.');
  } else {
    console.log('No se encontró la tarea con ese ID.');
  }
}

function main() {
  let running = true;
  while (running) {
    console.log('\n------------------------');
    console.log('         TAREAS');
    console.log('------------------------');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Salir');

    const option = readline.questionInt('\nElige una opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        deleteTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        running = false;
        break;
      default:
        console.log('Opción inválida. Por favor, elige una opción válida.');
    }
  }
}

main();
