const readline = require('readline');

function pregunta(pregunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}

function añadirTarea(listaTareas, indicador, descripción) {
    return new Promise((resolve) => {
        const nuevaTarea = {
            indicador,
            descripción,
            completada: false
        };
        listaTareas.push(nuevaTarea);
        resolve(listaTareas);
    });
}

function eliminarTarea(listaTareas, indicador) {
    return new Promise((resolve) => {
        const indice = listaTareas.findIndex(tarea => tarea.indicador === indicador);
        if (indice !== -1) {
            listaTareas.splice(indice, 1);
        }
        resolve(listaTareas);
    });
}

function completarTarea(listaTareas, indicador) {
    return new Promise((resolve) => {
        const tarea = listaTareas.find(tarea => tarea.indicador === indicador);
        if (tarea) {
            tarea.completada = true;
        }
        resolve(listaTareas);
    });
}

async function gestionarTareas() {
    const listaTareas = [];

    while (true) {
        console.log('-----------------');
        console.log('1. Añadir tarea');
        console.log('2. Eliminar tarea');
        console.log('3. Completar tarea');
        console.log('4. Salir');
        console.log('-----------------');

        const opcion = await pregunta('Elige una opción: ');

        if (opcion === '1') {
            const indicador = await pregunta('Indicador de la tarea: ');
            const descripción = await pregunta('Descripción de la tarea: ');
            listaTareas = await añadirTarea(listaTareas, indicador, descripción);
            console.log('Tarea añadida correctamente');
        } else if (opcion === '2') {
            const indicador = await pregunta('Indicador de la tarea a eliminar: ');
            listaTareas = await eliminarTarea(listaTareas, indicador);
            console.log('Tarea eliminada correctamente');
        } else if (opcion === '3') {
            const indicador = await pregunta('Indicador de la tarea a completar: ');
            listaTareas = await completarTarea(listaTareas, indicador);
            console.log('Tarea completada correctamente');
        } else if (opcion === '4') {
            break;
        } else {
            console.log('Opción no válida');
        }
    }

    console.log('Lista de tareas final:');
    console.log(listaTareas);
}

gestionarTareas();

