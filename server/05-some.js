const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let response = false;

for (let i = 0; i < numbers.length; i++) {
  let almacenaje = [];
  const element = numbers[i];
  if (element % 2 === 0) {
    response = true;
    break;
  }
}
console.log(response);
