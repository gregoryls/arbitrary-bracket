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
  img.src = utils.itemImages[entryObj.name];

  entryWrap.append(h2, p, img);
  return entryWrap;
}

function displayBracketPairings(pairings) {
  pairings.forEach((pair) => {
    const t1 = document.createElement("div");
    const t2 = document.createElement("div");
    const h21 = document.createElement("h2");
    const h22 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    h21.textContent = pair.team1;

    img.src = utils.itemImages[item.name];

    testDiv.append(h2, img);
  });
}

const round1Pairs = bracketPairings(
  bracketEntries,
  generateByes(bracketEntries.length),
);

console.log(Object.keys(round1Pairs[0]).length);
