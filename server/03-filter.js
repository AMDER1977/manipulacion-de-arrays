const words = ["spray", "limit", "elite", "exuberat"];

const newWords = [];

for (let index = 0; index < words.length; index++) {
  const item = words[index];

  if (item.length >= 6) {
    newWords.push(item);
  }
}

const responseWords = words.filter((item) => item.length >= 6);

console.log("el original: ", words);
console.log("con el for:", newWords);
console.log("con filter:", responseWords);
