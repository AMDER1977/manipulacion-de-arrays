const pets = ["cat", "dog", "turtle", "fox"];

let petInclude = [];

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "turtle") {
    petInclude.push(element);
  }
}
console.log(petInclude);
