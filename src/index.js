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

function entryDiv(entryObj) {
  const entryWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h2.textContent = entryObj.name;
  p.textContent = entryObj.description;
  if (utils.itemImages[entryObj.name]) {
    img.src = utils.itemImages[entryObj.name];
  }

  entryWrap.append(h2, p, img);
  return entryWrap;
}

function displayBracketPairings(pairings) {
  pairings.forEach((pair) => {
    const team1 = entryDiv(pair.team1);
    const team2 = entryDiv(pair.team2);

    testDiv.append(team1, team2);
  });
}

const round1Pairs = bracketPairings(
  bracketEntries,
  generateByes(bracketEntries.length),
);

console.log(Object.keys(round1Pairs[0]).length);
displayBracketPairings(round1Pairs);
