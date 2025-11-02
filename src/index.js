import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

function nextPowerOfTwo(number) {
  if (number <= 0 || number > 52 || typeof number !== "number")
    return undefined;
  const nextPower = 2 ** Math.ceil(Math.log2(number));

  return nextPower;
}

function generateByes(numberOfEntrants) {
  const byeCount = nextPowerOfTwo(numberOfEntrants) - numberOfEntrants;
  const byeObjs = [];
  for (let i = 0; i < byeCount; i += 1) {
    byeObjs[i] = `bye${i + 1}`;
  }
  return byeObjs;
}
function bracketPairings(bracketEntries, byeEntries) {
  const pairings = [];
  for (let i = 0; i < byeEntries.length; i += 1) {
    pairings[i] = {
      team1: bracketEntries[i],
      team2: { name: byeEntries[i] },
    };
  }
  for (
    // offset condition by +1 or it will miss the middle-seed pairing
    let i = byeEntries.length, j = -1;
    i < 1 + (bracketEntries.length - byeEntries.length) / 2;
    i += 1, j -= 1
  ) {
    pairings[i] = {
      team1: bracketEntries[i],
      team2: bracketEntries.at(j),
    };
  }
  return pairings;
}
bracketEntries.forEach((item) => {
  const h2 = document.createElement("h2");
  const img = document.createElement("img");

  img.src = utils.itemImages[item.name];
  h2.textContent = item.name;

  testDiv.append(h2, img);
});

console.log(
  bracketPairings(bracketEntries, generateByes(bracketEntries.length)),
);
