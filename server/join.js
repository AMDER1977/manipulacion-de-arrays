const elementos = ["fire", "air", "water", "earth"];

let respuesta = "";
const separator = "--";

for (let index = 0; index < elementos.length; index++) {
  const element = elementos[index];
  respuesta = respuesta + element + separator;
}
console.log("con for: ", respuesta);

console.log("con join:", elementos.join(separator));
