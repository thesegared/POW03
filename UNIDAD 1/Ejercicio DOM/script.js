//se adiciona un "event listener" para cuando se cargue todo el contenido de la pagina
document.addEventListener("DOMContentLoaded", () => {

    //se obtiene referencia a la lista dinamica
    const taskList = document.getElementById("taskList");

    //referencia al elemento seleccionado de la lista
    let selectedTask = null;

    //se adiciona event listener a cada boton 
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("ingrese el nombre de la tarea:");
        if (textoTarea) {
            //crea un nuevo elemento HTML de tipo "li"
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            taskList.appendChild(nuevaTarea); //buscar sobre esta funcion
            //se le adiciona el handler de seleccion a la nueva tarea creada.
            selectedTaskHandler(nuevaTarea);
        }
    });

    document.getElementById("editTask").addEventListener("click", () => {
        if (selectedTask) {
            const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
            if (nuevoTexto) {
                selectedTask.textContent = nuevoTexto
            }
        } else {
            alert("Seleccione una tarea para modificar");
        }
    });

    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask) {
            taskList.removeChild(selectedTask); //buscar sobre esta funcion
            selectedTask = null; //Deselecciona la tarea despues de eliminarla
        } else {
            alert("no ha seleccionado ninguna tarea");
        }
    });

    function selectedTaskHandler(task) {
        task.addEventListener("click", () => {
        // Si ya hay una tarea seleccionada, quita la selección de la tarea anterior
            if (selectedTask) {
                selectedTask.classList.remove("selected"); // Opcional: si tienes una clase CSS para selección
            }
            // Actualiza la tarea seleccionada
            selectedTask = task;
            // Añade clase CSS para indicar que la tarea está seleccionada (opcional)
            selectedTask.classList.add("selected");

        });

    }

});