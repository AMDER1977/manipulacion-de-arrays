const elementos = ["Fire", "air", "water", "Earth"];

let respuesta = "";
const separator = "--";

for (let index = 0; index < elementos.length; index++) {
  const element = elementos[index];
  respuesta = respuesta + element + separator;
}
console.log("con for: ", respuesta);

console.log("con join:", elementos.join(separator));

//** OTRA APLICACION */

const title = "curso de Manipulacion de Arrays";

const pasandoArray = title.split(" ").join(separator).toLowerCase();
console.log(pasandoArray);
