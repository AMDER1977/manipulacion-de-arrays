const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("iterar con for:", element);
}

letters.forEach((item) =>
  console.log("elemetos del array con for each:", item)
);
