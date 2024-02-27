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

//** Find con objetos */

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const resp3 = products.find((item) => item.id === "🍕");
console.log("esta es objetos con Find", resp3);
