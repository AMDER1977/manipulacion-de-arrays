/*
Ejercicio utilizando la función forEach
Crea una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muéstralos en un archivo HTML. Puedes utilizar un input de tipo checkbox para indicar el estado de la tarea. ¡Comparte tu trabajo en la sección de aportes!
*/
const tareas = [];

const btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click", () => {
  const titulo = document.querySelector("#titulo").value;
  const estado = document.querySelector("#estado").value;
  tareas.push({ titulo, estado });
  console.log(tareas);
});

const btnMostrar = document.querySelector("#btnMostrar");
