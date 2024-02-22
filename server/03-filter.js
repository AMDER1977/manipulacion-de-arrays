const words = ["spray", "limit", "elite", "exuberat"];

const newWords = [];

for (let index = 0; index < words.length; index++) {
  //con for muchas lineas
  const item = words[index];

  if (item.length >= 6) {
    newWords.push(item);
  }
}

const responseWords = words.filter((item) => item.length >= 6); //filter una sola linea

console.log("el original: ", words);
console.log("con el for:", newWords);
console.log("con filter:", responseWords);

/*FILTRANDO OBJETOS*/
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

const rta3 = orders.filter((item) => item.delivered && item.total >= 150);

console.log("filtrando un objeto: ", rta3);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};
console.log(search("Nico"));
