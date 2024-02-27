const numbers = [1, 30, 49, 29, 10, 13];

let resp = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 10) {
    resp = element;
    break;
  }
}
console.log("normal con ciclo for: ", resp);
const resp2 = numbers.find((item) => item === 49);
console.log("esta es con Find", resp2);
