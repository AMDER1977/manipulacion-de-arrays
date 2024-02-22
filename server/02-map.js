// const letters = ["a", "b", "c"];
// const newArray = letters.map((item) => item + "++");
// console.log("original", letters);
// console.log("new", newArray);

// const cook = ["chicken", "cow", "pig", "cheese"];
// const nexCook = cook.map((item) => item + "Uhm");
// console.log(nexCook);
const products = [
  { title: "Burguer", price: 12 },
  { title: "Pizza", price: 15 },
];
const app = document.getElementById("app");
const list = products.map((product) => {
  return ` <li>${product.title} - ${product.price}</li>`;
});
app.innerHTML = list.join("");
