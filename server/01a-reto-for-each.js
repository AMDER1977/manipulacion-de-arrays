/*
Ejercicio utilizando la función forEach
Crea una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muéstralos en un archivo HTML. Puedes utilizar un input de tipo checkbox para indicar el estado de la tarea. ¡Comparte tu trabajo en la sección de aportes!
*/
// Array de tareas con título y estado
const tareas = [
  { titulo: "Hacer la compra", completado: false },
  { titulo: "Estudiar para el examen", completado: false },
  { titulo: "Hacer ejercicio", completado: false },
];

// Función para renderizar la lista de tareas en HTML
function renderizarListaTareas() {
  const listaTareasElement = document.getElementById("listaTareas");

  // Limpiamos el contenido actual
  listaTareasElement.innerHTML = "";

  // Iteramos sobre el array de tareas y creamos elementos HTML
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");

    // Creamos un input de tipo checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completado; // Marcamos como completado si es true
    checkbox.addEventListener("change", () => {
      // Actualizamos el estado de la tarea cuando se cambia el checkbox
      tareas[index].completado = checkbox.checked;
    });

    // Creamos un span con el título de la tarea
    const span = document.createElement("span");
    span.textContent = tarea.titulo;

    // Añadimos el checkbox y el span al elemento li
    li.appendChild(checkbox);
    li.appendChild(span);

    // Añadimos el elemento li a la lista
    listaTareasElement.appendChild(li);
  });
}

// Llamamos a la función para renderizar la lista de tareas inicialmente
renderizarListaTareas();
