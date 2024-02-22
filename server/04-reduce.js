const totales = [1, 2, 3, 4, 5];

//con el bucle for sera:
let suma = 0;
for (let index = 0; index < totales.length; index++) {
  const element = totales[index];
  suma = suma + element;
}
console.log("con el ciclo for", suma);

//con el reduce sería:

const sumatoria = totales.reduce((sum, element) => sum + element, 0);
console.log("con reduce:", sumatoria);
