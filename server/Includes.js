const pets = ["cat", "dog", "turtle", "fox"];

//let petInclude = [];//aca lo hice asi pero solo pudiera tener una variable en false
let petInclude = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    // petInclude.push(element);// aca pushee pero solo se cambia a true.
    petInclude = true;
  }
}
console.log("hecho con for pusheando el elemento encontrado:", petInclude);

//** AHORA CON INCLUDE ES UN BOOLEANO QUE RETORNA */

let includesRta = pets.includes("cat");
console.log("con el metodo Includes: ", includesRta);
