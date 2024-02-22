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
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },

  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const response = orders.map((item) => item.total);
// const response1 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });

const response2 = orders.map((item) => {
  //utilizar spread operator para traer una copia del original y no crear uno nuevo
  return { ...item, tax: 0.19 };
});

console.log("response", response);
// console.log("response1 agregando tax: ", response1);
console.log("response2 agregando tax con spread operator: ", response2);
console.log("orders", orders);
