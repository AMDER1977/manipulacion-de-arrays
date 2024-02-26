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

const response2 = numbers.some((i) => i % 2 === 0);
console.log("response 2 : ", response2);

//** SOME CON OBJETOS */

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Nicoiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
