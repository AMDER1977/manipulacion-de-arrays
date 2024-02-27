const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

//*haciendolo con for tradicional

let newArray = [...elements];
for (let i = 0; i < otherElements.length; i++) {
  const element = otherElements[i];
  newArray.push(element);
}
console.log("Usando el FOR clasico: ", newArray);

//** CON CONCAT */

const conConcat = elements.concat(otherElements);
console.log("usando concat: ", conConcat);

//**IGUAL SE PUEDE UTILIZAR EL SPREAD OPERATION */
const respuestaN = [...elements, ...otherElements];
console.log("Con SPREAD : ", respuestaN);
