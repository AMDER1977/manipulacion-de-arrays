//* todos cumplan con la condicion retorna TRUE OR FALSE

const numbers = [1, 5, 6, 9, 23, 45];

let response = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    response = false;
  }
}
console.log(response);

//** con every */

let response2 = numbers.every((item) => item <= 50);
console.log(" Con Every : ", response2);
//* reto

const team = [
  { name: "Nicolas", age: 12 },
  { name: "Andrea", age: 8 },
  { name: "Zulema", age: 2 },
  { name: "Santiago", age: 18 },
];

const mayorQue = team.every((item) => item.age < 15);

console.log("Este es el reto veamos: ", mayorQue);
